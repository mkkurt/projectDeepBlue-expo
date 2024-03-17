import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

import { useRouter, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";

const ProblemList = ({ problems }) => {
  const router = useRouter();
  const { machineryId } = useGlobalSearchParams();

  const handlePress = (problem) => {
    router.push({
      pathname: "/[machineryId]/problem/[problemId]",
      params: {
        machineryId: machineryId,
        problemId: problem.name,
      },
    });
    console.log(`navigate to /${machineryId}/problem/${problem.name}`);
  };
  const renderProblemItem = ({ item, index }) => {
    return (
      <Pressable
        style={[styles.problemContainer]}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.problemName}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={problems}
      keyExtractor={(item) => item.name}
      renderItem={renderProblemItem}
    />
  );
};

const styles = StyleSheet.create({
  problemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  problemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reasonsContainer: {
    marginLeft: 15,
  },
  reasonContainer: {
    marginBottom: 5,
  },
  reasonName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  solution: {
    fontSize: 14,
  },
});

export default ProblemList;
