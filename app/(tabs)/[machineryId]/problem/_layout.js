import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProblemStackLayout() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Machinery Problems",
          headerRight: () => (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="[problemId]"
        options={{
          title: "Problem",
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 100,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
