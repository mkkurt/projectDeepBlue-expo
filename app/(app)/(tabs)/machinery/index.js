/* eslint-disable react-native/no-unused-styles */
import { memo, useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FadingView,
  Header,
  LargeHeader,
  SectionListWithHeaders,
} from "@codeherence/react-native-header";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import MachineryCard from "../../../../components/Home/MachineryCard";
import StyledSearchBar from "../../../../components/Home/StyledSearchBar";
import machinery from "../../../../db/machinery";

const canUseBlurView =
  Platform.OS === "ios" ||
  (Platform.OS === "android" && Number(Platform.Version) >= 31);

const ROOT_HORIZONTAL_PADDING = 12;
const DISABLED_COLOR = "rgba(255, 255, 255, 0.6)"; //White with 60% opacity
const DARK_MODE_TEXT_COLOR = "#fff"; //White
const DARK_MODE_BACKGROUND_COLOR = "#000"; //Black
const TRANSPARENT = "transparent";
const LIGHT_GRAY = "lightgray";
const DARK_BLUR_VIEW_BG = "rgba(0, 0, 0, 0.6)";

const HeaderComponent = ({ showNavBar, scrollY }) => {
  const { left, right } = useSafeAreaInsets();
  const router = useRouter();

  const blurStyle = useAnimatedStyle(() => {
    const blurOpacity = interpolate(
      Math.abs(scrollY.value),
      [0, 40],
      [0, 1],
      Extrapolation.CLAMP
    );

    return { opacity: blurOpacity };
  });

  const handleSearchPress = () => {
    console.log("Search Pressed");
  };

  const handleMorePress = () => {
    console.log("More Pressed");
  };

  return (
    <View style={styles.smallHeaderContainer}>
      <Animated.View style={StyleSheet.absoluteFill}>
        <Animated.View>
          <View>
            {canUseBlurView ? (
              <Animated.View
                style={[StyleSheet.absoluteFill, styles.blurView, blurStyle]}
              >
                <BlurView
                  style={StyleSheet.absoluteFill}
                  intensity={50}
                  tint="dark"
                />
              </Animated.View>
            ) : (
              <Animated.View
                style={[
                  StyleSheet.absoluteFill,
                  styles.blurView,
                  styles.androidBlurViewBg,
                  blurStyle,
                ]}
              />
            )}
          </View>
        </Animated.View>
      </Animated.View>

      <Header
        showNavBar={showNavBar}
        headerCenterFadesIn={false}
        headerStyle={styles.headerStyle}
        noBottomBorder
        // headerRight={
        //   <>
        //     <TouchableOpacity
        //       style={styles.backButtonContainer}
        //       onPress={handleMorePress}
        //     >
        //       <Feather color="white" name="more-horizontal" size={18} />
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //       style={styles.backButtonContainer}
        //       onPress={handleSearchPress}
        //     >
        //       <Feather color="white" name="search" size={18} />
        //     </TouchableOpacity>
        //   </>
        // }
        headerRightStyle={[
          styles.headerRightStyle,
          { paddingLeft: Math.max(right, ROOT_HORIZONTAL_PADDING) },
        ]}
        headerLeft={
          <>
            <FadingView opacity={showNavBar}>
              <Text style={styles.navBarTitle}>Kutay Kurt</Text>
              <Text style={styles.disabledSmallText}>Marine Engineer</Text>
            </FadingView>
          </>
        }
        headerLeftStyle={[
          styles.headerLeftStyle,
          { paddingLeft: Math.max(left, ROOT_HORIZONTAL_PADDING) },
        ]}
      />
    </View>
  );
};

const LargeHeaderComponent = () => {
  const { left, right } = useSafeAreaInsets();

  return (
    <LargeHeader
      headerStyle={[
        styles.largeHeaderStyle,
        {
          paddingLeft: Math.max(left, ROOT_HORIZONTAL_PADDING),
          paddingRight: Math.max(right, ROOT_HORIZONTAL_PADDING),
        },
      ]}
    >
      <View style={styles.profileHandleContainer}>
        <Text style={styles.title}>Welcome back,</Text>
        <Text style={styles.disabledText}>Kutay Kurt | Marine Engineer</Text>
        <View style={styles.separator} />
        {/* <View style={styles.headerWarningListContainer}>
          <View style={styles.headerWarningContainer}>
            <Feather color="red" name="alert-triangle" size={18} />
            <Text style={styles.text}>
              There is a <Text style={styles.primaryText}>main engine</Text>{" "}
              issue. Click <Text style={styles.primaryText}>here</Text> for more
              information.
            </Text>
          </View>
          <View style={styles.headerWarningContainer}>
            <Feather color="red" name="alert-triangle" size={18} />
            <Text style={styles.text}>
              There is a <Text style={styles.primaryText}>main engine</Text>{" "}
              issue. Click <Text style={styles.primaryText}>here</Text> for more
              information.
            </Text>
          </View>
        </View> */}
      </View>
    </LargeHeader>
  );
};

const MemoizedComponent = memo(MachineryCard, () => true);

const MachineryScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredMachinery = useMemo(() => {
    if (!searchQuery) return machinery;

    const filteredSections = machinery
      .map((section) => ({
        ...section,
        data: section.data.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.data.length > 0);

    return filteredSections.length > 0 ? filteredSections : machinery;
  }, [searchQuery]);

  return (
    <View
      style={styles.container}
      onStartShouldSetResponderCapture={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <StatusBar style="light" />
      <SectionListWithHeaders
        HeaderComponent={HeaderComponent}
        LargeHeaderComponent={LargeHeaderComponent}
        sections={filteredMachinery}
        disableAutoFixScroll
        ignoreLeftSafeArea
        ignoreRightSafeArea
        headerFadeInThreshold={0.2}
        disableLargeHeaderFadeAnim
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: tabBarHeight },
        ]}
        contentInsetAdjustmentBehavior="automatic"
        containerStyle={styles.rootContainer}
        renderItem={({ item }) => <MemoizedComponent item={item} />}
        stickySectionHeadersEnabled
        renderSectionHeader={() => (
          <View style={styles.listHeaderContainer}>
            <View style={styles.listHeaderTopContainer}>
              <StyledSearchBar
                placeholder="Search machinery..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyComponentContainer}>
            <Text style={styles.emptyText}>No machinery found.</Text>
          </View>
        )}
      />
      {/*
      <View style={{ height: tabBarHeight }} />
      */}
    </View>
  );
};

export default MachineryScreen;

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", color: DARK_MODE_TEXT_COLOR },
  navBarTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: DARK_MODE_TEXT_COLOR,
  },
  largeHeaderStyle: {
    flexDirection: "column",
    gap: 12,
  },
  backButtonContainer: {
    backgroundColor: DARK_MODE_BACKGROUND_COLOR,
    borderRadius: 100,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: { backgroundColor: TRANSPARENT },
  smallHeaderContainer: { position: "relative", zIndex: 1 },
  headerRightStyle: { gap: 6, paddingLeft: 12 },
  headerLeftStyle: { gap: 12, paddingLeft: 12 },
  blurView: { zIndex: 1 },
  container: {
    flex: 1,
    backgroundColor: DARK_MODE_BACKGROUND_COLOR,
  },
  contentContainer: {
    backgroundColor: DARK_MODE_BACKGROUND_COLOR,
  },
  rootContainer: {
    backgroundColor: DARK_MODE_BACKGROUND_COLOR,
    flex: 1,
  },
  disabledSmallText: { color: DISABLED_COLOR, fontSize: 12 },
  disabledText: { color: DISABLED_COLOR, fontSize: 14 },
  separator: { height: 1, backgroundColor: LIGHT_GRAY, marginVertical: 12 },
  profileHandleContainer: { gap: 4 },
  listHeaderContainer: {
    backgroundColor: DARK_MODE_BACKGROUND_COLOR,
  },
  listHeaderTopContainer: {},
  androidBlurViewBg: { backgroundColor: DARK_BLUR_VIEW_BG },
  emptyComponentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    color: DISABLED_COLOR,
    fontSize: 18,
  },
});
