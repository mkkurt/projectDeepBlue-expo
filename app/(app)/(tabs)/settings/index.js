//app/(app)/settings/index.js
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useAuth } from "../../../../state/AppProvider";
import { Button } from "react-native-elements";

const SettingsScreen = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
