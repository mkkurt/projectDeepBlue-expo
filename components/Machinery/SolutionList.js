/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { FlatList, Text, View, StyleSheet, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SolutionList = ({ reasons }) => {
  const renderReasonItem = ({ item }) => {
    if (reasons[0]?.solutions || reasons[0]?.solution) {
      return (
        <View
          style={styles.reasonContainer}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.reasonName}>{item.name}</Text>
          <Text style={styles.solution}>
            {item.solution || item.solutions?.join("\n") || ""}
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={styles.solutionContainer}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <MaterialIcons
            name="lightbulb"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.reasonName}>{item.name}</Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={reasons}
      keyExtractor={(item) => item.name}
      renderItem={renderReasonItem}
      style={{ marginTop: 10 }}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  reasonContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  solutionContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  reasonName: {
    fontSize: 16,
    fontWeight: "bold",
    flexShrink: 1,
  },
  solution: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
  },
});

export default SolutionList;
