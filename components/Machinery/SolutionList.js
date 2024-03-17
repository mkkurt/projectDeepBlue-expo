import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

const SolutionList = ({ solutions }) => {
  const renderReasons = (reasons) => (
    <Pressable style={styles.reasonsContainer} onPress={Keyboard.dismiss}>
      {reasons.map((reason, index) => (
        <View key={index} style={styles.reasonContainer}>
          <Text style={styles.reasonName}>{reason.name}</Text>
          <Text style={styles.solution}>{reason.solution}</Text>
        </View>
      ))}
    </Pressable>
  );

  const renderSolutionItem = ({ item }) => {
    return (
      <View style={[styles.problemContainer]}>
        <Text style={styles.problemName}>{item.name}</Text>
        {renderReasons(item.reasons)}
      </View>
    );
  };

  return (
    <FlatList
      data={solutions}
      keyExtractor={(item) => item.name}
      renderItem={renderSolutionItem}
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
    fontSize: 16,
  },
});

export default SolutionList;
