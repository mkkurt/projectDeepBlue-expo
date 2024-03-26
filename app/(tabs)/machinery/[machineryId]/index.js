import { SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import problems from "../../../../db/fueloilseparator.js";
import ProblemList from "@/components/Machinery/ProblemList.js";
import { Stack } from "expo-router";

const MachineryProblemsScreen = () => {
  const [filteredProblems, setFilteredProblems] = useState(problems);
  const { machineryId } = useGlobalSearchParams();

  const machineName = machineryId;
  useEffect(() => {
    console.log("machineryId", machineryId);
  }, [machineryId]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: machineName,
        }}
      />
      <ProblemList problems={filteredProblems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MachineryProblemsScreen;
