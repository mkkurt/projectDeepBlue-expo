import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

function TabBarIcon(props) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      safeAreaInsets={{
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarBackground: () => null,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          borderRadius: 30,
          backgroundColor: "#6495ED",
          borderTopWidth: 0,
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 8, // Add shadow on Android
          shadowOpacity: 0.3, // Add shadow on iOS
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 4,
          display: "flex",
          height: 60,
          marginHorizontal: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="machinery"
        options={{
          title: "Tab Machinery",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ai/index"
        options={{
          title: "Tab AI",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="android" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Tab Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
