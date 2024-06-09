import { View, Text } from "react-native";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import SolutionList from "../../../../../../components/Machinery/SolutionList";
import machinery from "../../../../../../db/machinery";
const data = machinery[0].data;

const ProblemId = () => {
  const { problemId } = useLocalSearchParams();
  const { machineryId } = useGlobalSearchParams();

  const getMachineryById = (id) => {
    return data.find((machineryItem) => machineryItem.id === id);
  };
  const machineryItem = getMachineryById(machineryId);
  const problems = machineryItem?.problems?.default;

  const problem = problems?.find((problem) => problem.name === problemId);
  return (
    <View>
      <Stack.Screen
        options={{
          title: problemId,
        }}
      />
      {/* <Text>{JSON.stringify(problem.reasons, null, 2)}</Text> */}
      <SolutionList reasons={problem?.reasons || problem?.solutions} />
    </View>
  );
};

export default ProblemId;
