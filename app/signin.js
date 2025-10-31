/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Linking,
} from "react-native";

import { useAuth } from "../state/AppProvider";
import { router } from "expo-router";

const credentials = {
  username: "admin",
  password: "admin",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff", // Light blue background
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1e90ff", // Dodger blue title
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  signInButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 5,
    width: "80%",
  },
  signInButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  developerInfo: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  developerText: {
    fontSize: 12,
    color: "#555",
  },
  developerInfoContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    width: "80%", // Adjust width as needed
  },
  developerRow: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  developerName: {
    fontSize: 14, // Slightly larger font
    fontWeight: "bold",
    color: "#333", // Darker gray
  },
  emailText: {
    fontSize: 14,
    color: "#1e90ff",
    textDecorationLine: "underline",
  },
  dataCredit: {
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
  },
  advisor: {
    fontSize: 12,
    fontWeight: "italic",
    color: "#333",
    textAlign: "center",
  },
  university: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
});

const SignInScreen = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const WAIT_TIME = 1000;
  const { login } = useAuth(); // Get the login function from context

  const wait = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });

  const handleLogin = async () => {
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      login({ username }); // Call the login function to update the context
      //wait for 1 second
      await wait(WAIT_TIME);
      router.replace("/"); // Redirect to the home page
    } else {
      Alert.alert("Error", "Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* App Logo */}
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Marine Engineer Assistant</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Developer Information */}

      <View style={styles.developerInfoContainer}>
        <View style={styles.developerRow}>
          <Text style={styles.developerName}>Developed by: M. Kutay KURT</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:kutaykurt99@gmail.com")}
          >
            <Text style={styles.emailText}>kutaykurt99@gmail.com</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.dataCredit}>
          Data Source: Chief Eng. Kemal DEMİREL's Gemi Yardimci Makineleri II
        </Text>
        <Text style={styles.advisor}>
          Thesis Supervisor: Ömer Berkehan İNAL
        </Text>
        <Text style={styles.university}>
          Istanbul Technical University | Faculty of Maritime
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
