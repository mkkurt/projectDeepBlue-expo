import { Stack } from "expo-router";

export default function MachineryStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="[machineryId]" options={{}} />
    </Stack>
  );
}
