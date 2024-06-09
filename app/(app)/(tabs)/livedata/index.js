import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import ExhaustBarChart from "@/components/LiveData/ExhaustBarChart";

export default function LiveDataScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exhaust Bar Chart</Text>
      <ExhaustBarChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
});
