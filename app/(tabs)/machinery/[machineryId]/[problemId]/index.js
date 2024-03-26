import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import problems from "../../../../../db/fueloilseparator";
import SolutionList from "../../../../../components/Machinery/SolutionList";

const ProblemId = () => {
  const { problemId } = useLocalSearchParams();

  const problem = problems.find((problem) => problem.name === problemId);

  return (
    <View>
      <Stack.Screen
        options={{
          title: problemId,
        }}
      />
      <SolutionList reasons={problem.reasons} />
    </View>
  );
};

export default ProblemId;
