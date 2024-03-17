import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProblemId = () => {
  const { machineryId } = useLocalSearchParams();
  return (
    <View>
      <Text>ProblemId</Text>
      <Text>{machineryId}</Text>
    </View>
  );
};

export default ProblemId;
