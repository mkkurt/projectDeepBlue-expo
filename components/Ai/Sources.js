import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  sourceContainer: {
    padding: 8,
    backgroundColor: Colors.light.secondary,
    borderRadius: 10,
    borderWidth: 1,
    margin: 6,
    width: "80%",
    alignSelf: "flex-start",
  },
  scoreHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.primary,
  },
  scoreText: {
    fontSize: 12,
    color: Colors.black,
  },
});

export default function Sources({ item }) {
  return (
    <View key={item.doc_id} style={styles.sourceContainer}>
      <Text style={styles.scoreHeader}>
        Page {item.document.doc_metadata.page_label}
        {"\n"}
        Score: {item.score.toFixed(2) * 100}%
      </Text>
      <Text style={styles.scoreText}>
        {item?.document?.doc_metadata?.window}
      </Text>
    </View>
  );
}
