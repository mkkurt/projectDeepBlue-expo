import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { getData } from "@/services/dataService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Colors from "@/constants/Colors";

export default function ExhaustBarChart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => getData(),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data?.Cylinder && data?.Cylinder.length > 0 && (
        <BarChart
          yAxisSuffix="°C"
          data={{
            // labels: data?.Cylinder.map((item, index) => index + 1),
            labels: data?.Cylinder.map((item, index) => "No. " + (index + 1)),
            datasets: [
              {
                data: data?.Cylinder.map((item) => item.exhaustTemp),
              },
            ],
          }}
          fromZero
          showValuesOnTopOfBars
          withInnerLines={false}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: Colors.light.primary,
            backgroundGradientFrom: Colors.light.primary,
            backgroundGradientTo: Colors.light.primary,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForVerticalLabels: {
              fontSize: 10,
              fontWeight: "bold",
            },
            propsForHorizontalLabels: {
              fontWeight: "bold",
            },
            style: {},
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
