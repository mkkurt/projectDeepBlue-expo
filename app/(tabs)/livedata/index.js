import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import ExhaustBarChart from "@/components/LiveData/ExhaustBarChart";

export default function LiveDataScreen() {
  return (
    <View style={styles.container}>
      <ExhaustBarChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
