/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-single-element-style-arrays */
import React from "react";
import { FlatList, Text, StyleSheet, Pressable } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";

const ProblemList = ({ problems }) => {
  const router = useRouter();
  const { machineryId } = useGlobalSearchParams();

  const handlePress = (problem) => {
    router.navigate(`machinery/${machineryId}/${problem.name}`);
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
