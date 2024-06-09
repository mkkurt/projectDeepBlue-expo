import { Slot } from "expo-router";
import { AppProvider } from "../state/AppProvider";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  );
}
