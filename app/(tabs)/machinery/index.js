import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  FadingView,
  Header,
  LargeHeader,
  SectionListWithHeaders,
} from "@codeherence/react-native-header";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import MachineryCard from "../../../components/Home/MachineryCard.js";

const VERTICAL_SPACING = 12;
const ROOT_HORIZONTAL_PADDING = 12;
const TWITTER_PRIMARY_COLOR = "#1d9bf0";
const DISABLED_COLOR = "rgba(255, 255, 255, 0.6)";
const AVATAR_START_SCALE = 1;
const AVATAR_END_SCALE = 0.5;
const AVATAR_SIZE_VALUE = 64;
const BANNER_BOTTOM_HEIGHT_ADDITION = AVATAR_SIZE_VALUE;

const HeaderComponent = ({ showNavBar, scrollY }) => {
  const navigation = useNavigation();
  const { left, right } = useSafeAreaInsets();

  const profileImageScale = useDerivedValue(() => {
    return interpolate(
      scrollY.value,
      [0, BANNER_BOTTOM_HEIGHT_ADDITION],
      [AVATAR_START_SCALE, AVATAR_END_SCALE],
      Extrapolate.CLAMP
    );
  });

  // This allows the profile container to translate as the user scrolls.
  const profileContainerTranslationStyle = useAnimatedStyle(() => {
    const translateY = -scrollY.value + BANNER_BOTTOM_HEIGHT_ADDITION / 2;

    return { transform: [{ translateY }] };
  });

  // Once the profile image has been scaled down, we allow the profile container to be
  // hidden behind the banner. This is done by setting the zIndex to -1.
  const rootProfileRowZIndexStyle = useAnimatedStyle(() => {
    return { zIndex: profileImageScale.value <= AVATAR_END_SCALE ? -1 : 1 };
  });

  // Slow down the avatar's translation to allow it to scale down and
  // still stay at its position.
  const profileImageScaleStyle = useAnimatedStyle(() => {
    const profileImageTranslationY = interpolate(
      profileImageScale.value,
      [AVATAR_START_SCALE, AVATAR_END_SCALE],
      [0, AVATAR_SIZE_VALUE / 2],
      Extrapolate.CLAMP
    );

    return {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50%",
      transform: [
        { scale: profileImageScale.value },
        { translateY: profileImageTranslationY },
      ],
    };
  });

  return (
    <View style={styles.smallHeaderContainer}>
      <Header
        showNavBar={showNavBar}
        headerCenterFadesIn={false}
        headerStyle={styles.headerStyle}
        noBottomBorder
        // headerRight={
        //   <>
        //     <TouchableOpacity style={styles.backButtonContainer}>
        //       <Feather color="white" name="more-horizontal" size={18} />
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.backButtonContainer}>
        //       <Feather color="white" name="search" size={18} />
        //     </TouchableOpacity>
        //   </>
        // }
        // headerRightStyle={[
        //   styles.headerRightStyle,
        //   { paddingLeft: Math.max(right, ROOT_HORIZONTAL_PADDING) },
        // ]}
        // headerLeft={
        //   <>
        //     {/* <TouchableOpacity
        //       onPress={() => navigation.canGoBack() && navigation.goBack()}
        //       style={styles.backButtonContainer}
        //     >
        //       <Feather color="white" name={"arrow-left"} size={18} />
        //     </TouchableOpacity> */}
        //     <FadingView opacity={showNavBar}>
        //       <Text style={styles.navBarTitle}>Kutay Kurt</Text>
        //       <Text style={styles.disabledSmallText}>3rd Engineer</Text>
        //     </FadingView>
        //   </>
        // }
        // headerLeftStyle={[
        //   styles.headerLeftStyle,
        //   { paddingLeft: Math.max(left, ROOT_HORIZONTAL_PADDING) },
        // ]}
      />

      <Animated.View
        style={[styles.profileContainer, rootProfileRowZIndexStyle]}
      >
        <Animated.View
          style={[
            styles.profileFollowContainer,
            {
              alignItems: "center",
              justifyContent: "flex-start",
            },
            profileContainerTranslationStyle,
          ]}
        >
          <Animated.View style={profileImageScaleStyle}>
            <Feather name="tool" color="white" size={36} />
            <Text style={styles.title}>Kutay Kurt</Text>
            <TouchableOpacity style={styles.pillButton}>
              <Text style={styles.badge}>3rd Engineer</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </Animated.View>
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
      <View style={styles.dataRow}>
        <Feather name="sun" color={DISABLED_COLOR} size={18} />
        <Text style={styles.disabledText}>
          It's a cloudy morning in Trieste, Sir!
        </Text>
      </View>
    </LargeHeader>
  );
};

const SomeComponent = ({ index }) => {
  return (
    <View style={styles.children}>
      <Text style={styles.text}>{index}</Text>
    </View>
  );
};

const MemoizedComponent = React.memo(MachineryCard, () => true);

const HomeTabScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    {
      title: "Troubleshooting",
      data: [
        {
          imageSource:
            "https://res.cloudinary.com/seably/image/upload/ar_16:10,c_fill,q_auto,w_800/kyfxupuie453gihrphwb.jpeg",
          name: "Separator",
          description: "Separator troubleshoooting",
        },
        {
          imageSource:
            "https://detegasa.com/wp-content/uploads/2015/10/incinerator.png",
          name: "Incinerator",
          description: "Incinerator troubleshoooting",
        },
        {
          imageSource:
            "https://miro.medium.com/v2/resize:fit:425/0*TYAMHH2LF-QRfAkG.png",
          name: "Oily Water Separator",
          description: "Oily Water Separator troubleshoooting",
        },
        {
          imageSource:
            "https://res.cloudinary.com/seably/image/upload/ar_16:10,c_fill,q_auto,w_800/kyfxupuie453gihrphwb.jpeg",
          name: "Separator",
          description: "Separator troubleshoooting",
        },
        {
          imageSource:
            "https://detegasa.com/wp-content/uploads/2015/10/incinerator.png",
          name: "Incinerator",
          description: "Incinerator troubleshoooting",
        },
        {
          imageSource:
            "https://miro.medium.com/v2/resize:fit:425/0*TYAMHH2LF-QRfAkG.png",
          name: "Oily Water Separator",
          description: "Oily Water Separator troubleshoooting",
        },
      ],
    },
  ];

  return (
    <>
      <StatusBar style="light" />
      <SectionListWithHeaders
        HeaderComponent={HeaderComponent}
        LargeHeaderComponent={LargeHeaderComponent}
        sections={data}
        disableAutoFixScroll
        ignoreLeftSafeArea
        ignoreRightSafeArea
        headerFadeInThreshold={0.2}
        disableLargeHeaderFadeAnim
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: bottom },
        ]}
        containerStyle={styles.rootContainer}
        renderItem={({ item, index }) => (
          <MemoizedComponent
            name={item.name}
            description={item.description}
            imageSource={{ uri: item.imageSource }}
          />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={() => (
          <View style={styles.tabBarContainer}>
            {["Troubleshoot", "Live Data"].map((tab, index) => (
              <TouchableOpacity
                key={`option-${index}`}
                style={styles.tabButton}
                onPress={() => setActiveTab(index)}
              >
                <Text style={styles.tabText}>{tab}</Text>
                {activeTab === index && <View style={styles.blueUnderline} />}
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </>
  );
};

export default HomeTabScreen;

const styles = StyleSheet.create({
  children: { marginTop: 16, paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "white", marginLeft: 12 },
  navBarTitle: { fontSize: 16, fontWeight: "bold", color: "white" },
  largeHeaderStyle: {
    flexDirection: "column",
    gap: 12,
    marginTop:
      AVATAR_SIZE_VALUE / 2 + VERTICAL_SPACING + BANNER_BOTTOM_HEIGHT_ADDITION,
  },
  backButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 100,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    backgroundColor: "transparent",
  },
  smallHeaderContainer: {
    position: "relative",
    zIndex: 1,
  },
  headerRightStyle: { gap: 6, paddingLeft: 12 },
  headerLeftStyle: { gap: 12, paddingLeft: 12 },
  blurView: { zIndex: 1 },
  container: { flex: 1, backgroundColor: "#000" },
  contentContainer: { backgroundColor: "#000", flexGrow: 1 },
  text: { color: "#fff" },
  rootContainer: {
    backgroundColor: "#000",
  },
  profileFollowContainer: {
    position: "absolute",
    left: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  badge: { fontSize: 12, fontWeight: "600" },
  pillButton: {
    paddingVertical: 3,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 200,
    marginLeft: 12,
  },
  disabledSmallText: { color: DISABLED_COLOR, fontSize: 12 },
  disabledText: { color: DISABLED_COLOR, fontSize: 14 },
  profileContainer: {
    paddingHorizontal: 12,
  },
  tabBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
  },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
  tabText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 12,
  },
  blueUnderline: {
    height: 2,
    width: "50%",
    backgroundColor: TWITTER_PRIMARY_COLOR,
    borderRadius: 4,
  },
  dataRow: { flexDirection: "row", gap: 4, alignItems: "center" },
});
