import { Slot } from "expo-router";
import { AppProvider } from "../state/AppProvider";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <ErrorBoundary>
      <AppProvider>
        <Slot />
      </AppProvider>
    </ErrorBoundary>
  );
}
