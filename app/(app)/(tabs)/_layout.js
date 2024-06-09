import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";

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
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          borderRadius: 30,
          backgroundColor: Colors.black,
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          display: "flex",
          height: 60,
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
          href: null, // For the representation
          title: "Tab AI",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="microchip" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="livedata/index"
        options={{
          href: null, // For the representation
          title: "Live Data",
          tabBarIcon: ({ color }) => <TabBarIcon name="signal" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
