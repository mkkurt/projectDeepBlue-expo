import React from "react";
import {
  Header,
  LargeHeader,
  ScalingView,
} from "@codeherence/react-native-header";

import { Text, StyleSheet } from "react-native";

const HEADER_TITLE_SIZE = 16;
const WELCOME_TEXT_SIZE = 14;
const LARGE_TITLE_SIZE = 32;
const DESCRIPTION_SIZE = 12;
const DESCRIPTION_COLOR = "#8E8E93";

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: HEADER_TITLE_SIZE,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: WELCOME_TEXT_SIZE,
  },
  largeTitle: {
    fontSize: LARGE_TITLE_SIZE,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: DESCRIPTION_SIZE,
    fontWeight: "normal",
    color: DESCRIPTION_COLOR,
  },
});

export const HeaderComponent = ({ showNavBar }) => (
  <Header
    showNavBar={showNavBar}
    headerCenter={
      <Text style={styles.headerTitle}>
        react-native-header
      </Text>
    }
  />
);

export const LargeHeaderComponent = ({ scrollY }) => (
  <LargeHeader>
    <ScalingView scrollY={scrollY}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.largeTitle}>
        react-native-header
      </Text>
      <Text style={styles.descriptionText}>
        This project displays some header examples using the package.
      </Text>
    </ScalingView>
  </LargeHeader>
);
