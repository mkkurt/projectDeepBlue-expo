import React from "react";
import { FlatList, Text, View, StyleSheet, Keyboard } from "react-native";

const SolutionList = ({ reasons }) => {
  const renderReasonItem = ({ item }) => {
    return (
      <View
        style={styles.reasonContainer}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.reasonName}>{item.name}</Text>
        <Text style={styles.solution}>{item.solution}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={reasons}
      keyExtractor={(item) => item.name}
      renderItem={renderReasonItem}
      style={{ marginTop: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  reasonContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  reasonName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  solution: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default SolutionList;
