import React from "react";
import {
  Header,
  LargeHeader,
  ScalingView,
} from "@codeherence/react-native-header";

import { Text, View } from "react-native";
import { SharedValue } from "react-native-reanimated";

export const HeaderComponent = ({ showNavBar }) => (
  <Header
    showNavBar={showNavBar}
    headerCenter={
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        react-native-header
      </Text>
    }
  />
);

export const LargeHeaderComponent = ({ scrollY }) => (
  <LargeHeader>
    <ScalingView scrollY={scrollY}>
      <Text style={{ fontSize: 14 }}>Welcome!</Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        react-native-header
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "normal", color: "#8E8E93" }}>
        This project displays some header examples using the package.
      </Text>
    </ScalingView>
  </LargeHeader>
);
