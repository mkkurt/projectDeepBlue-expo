//app/(app)/settings/index.js
import { SafeAreaView, StyleSheet } from "react-native";
import { useAuth } from "../../../../state/AppProvider";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SettingsScreen = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
