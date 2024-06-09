import React from "react";
import { Stack, useNavigation } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function StackLayout() {
  const navigation = useNavigation();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{}} />
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
