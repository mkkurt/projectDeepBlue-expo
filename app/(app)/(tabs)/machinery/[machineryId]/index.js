import { Keyboard, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import ProblemList from "@/components/Machinery/ProblemList.js";
import { Stack } from "expo-router";
import machinery from "../../../../../db/machinery";
import StyledSearchBar from "../../../../../components/Home/StyledSearchBar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const data = machinery[0].data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MachineryProblemsScreen = () => {
  const { machineryId } = useGlobalSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const getMachineryById = (id) => {
    return data.find((machineryItem) => machineryItem.id === id);
  };

  const machineryItem = getMachineryById(machineryId);

  const filteredProblems = machineryItem?.problems?.default.filter((problem) =>
    problem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView
      style={[styles.container, { marginBottom: tabBarHeight + 30 }]}
      onStartShouldSetResponderCapture={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: machineryItem?.name,
        }}
      />
      <StyledSearchBar
        placeholder="Search machinery..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {/* TODO: investiage the problems.default later. */}
      {/* <ProblemList problems={machineryItem?.problems?.default} /> */}
      <ProblemList problems={filteredProblems} />
    </SafeAreaView>
  );
};

export default MachineryProblemsScreen;
