import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import ProblemList from "@/components/Machinery/ProblemList.js";
import { Stack } from "expo-router";
import { useMachineryContext } from "../../../../state/AppProvider";
// import {data } from "../../../../db/machinery";
//import the data as the data[0] which is the first item in the array:
import machinery from "../../../../db/machinery";
const data = machinery[0].data;

const MachineryProblemsScreen = () => {
  const { machineryId } = useGlobalSearchParams();

  const getMachineryById = (id) => {
    return data.find((machineryItem) => machineryItem.id === id);
  };

  const machineryItem = getMachineryById(machineryId);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: machineryItem.name,
        }}
      />
      {/* TODO: investiage the problems.default later. */}
      <ProblemList problems={machineryItem.problems.default} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MachineryProblemsScreen;
