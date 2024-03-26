import { useCallback, useState, memo, useEffect } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FadingView,
  Header,
  LargeHeader,
  SectionListWithHeaders,
  ScrollViewWithHeaders,
} from "@codeherence/react-native-header";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import MachineryCard from "../../../components/Home/MachineryCard";
import machinery from "../../../db/machinery";
import { useRouter } from "expo-router";
import StyledSearchBar from "../../../components/Home/StyledSearchBar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const canUseBlurView =
  Platform.OS === "ios" ||
  (Platform.OS === "android" && Number(Platform.Version) >= 31);

const ROOT_HORIZONTAL_PADDING = 12;
const BLUE = "#1d9bf0";
const DISABLED_COLOR = "rgba(255, 255, 255, 0.6)"; //White with 60% opacity
const LIGHT_MODE_TEXT_COLOR = "#000"; //Black
const LIGHT_MODE_BACKGROUND_COLOR = "#fff"; //White
const DARK_MODE_TEXT_COLOR = "#fff"; //White
const DARK_MODE_BACKGROUND_COLOR = "#000"; //Black
const TRANSPARENT = "transparent";
const LIGHT_GRAY = "lightgray";
const DARK_BLUR_VIEW_BG = "rgba(0, 0, 0, 0.6)";
const WARNING_COLOR = "rgba(255, 0, 0, 0.2)";

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
        headerRight={
          <>
            <TouchableOpacity style={styles.backButtonContainer}>
              <Feather color="white" name="more-horizontal" size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => {
                //open the search modal
                router.navigate("/modal");
              }}
            >
              <Feather color="white" name="search" size={18} />
            </TouchableOpacity>
          </>
        }
        headerRightStyle={[
          styles.headerRightStyle,
          { paddingLeft: Math.max(right, ROOT_HORIZONTAL_PADDING) },
        ]}
        headerLeft={
          <>
            <FadingView opacity={showNavBar}>
              <Text style={styles.navBarTitle}>Kutay Kurt</Text>
              <Text style={styles.disabledSmallText}>3rd Engineer</Text>
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
        <Text style={styles.disabledText}>Kutay Kurt | 3rd Engineer</Text>
        <View style={styles.separator} />
        <View style={styles.headerWarningListContainer}>
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
        </View>
      </View>
    </LargeHeader>
  );
};

const MemoizedComponent = memo(MachineryCard, () => true);

const MachineryScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <>
      <StatusBar style="light" />
      <SectionListWithHeaders
        HeaderComponent={HeaderComponent}
        LargeHeaderComponent={LargeHeaderComponent}
        sections={machinery}
        disableAutoFixScroll
        ignoreLeftSafeArea
        ignoreRightSafeArea
        headerFadeInThreshold={0.2}
        disableLargeHeaderFadeAnim
        style={[
          styles.container,
          {
            // marginBottom: tabBarHeight + 20
          },
        ]}
        contentContainerStyle={[styles.contentContainer]}
        contentInsetAdjustmentBehavior="automatic"
        containerStyle={styles.rootContainer}
        contentInset={{ bottom }}
        renderItem={({ item }) => (
          <MemoizedComponent
            name={item.name}
            description={item.description}
            imageSource={{ uri: item.imageSource }}
          />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={() => (
          <View style={styles.listHeaderContainer}>
            <View style={styles.listHeaderTopContainer}>
              <StyledSearchBar placeholder="Search machinery..." />
            </View>
          </View>
        )}
      />
      {/* 
      //add a bottom padding to the screen to prevent the last item from being hidden behind the tab bar 
      <View style={{ height: tabBarHeight }} />
      */}
    </>
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
    flexGrow: 1,
  },
  text: { color: DARK_MODE_TEXT_COLOR },
  primaryText: { color: BLUE },
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
  headerWarningContainer: {
    backgroundColor: WARNING_COLOR,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerWarningListContainer: {
    gap: 8,
  },
});
