// app/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useAuth } from "../state/AppProvider";
import { router } from "expo-router";

const credentials = {
  username: "admin",
  password: "admin",
};

export default function LoginScreen() {
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
      alert("Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Marine Engineer Assistant</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
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

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
}

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
  forgotPasswordLink: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#1e90ff",
  },
});
