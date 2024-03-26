import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const generateMessages = () => {
  const messages = [];
  for (let i = 0; i < 50; i++) {
    messages.push({ id: i, text: `Message ${i + 1}` });
  }
  return messages;
};

const ChatScreen = () => {
  const [messages, setMessages] = useState(generateMessages());
  const [inputText, setInputText] = useState("");

  const tabBarHeight = useBottomTabBarHeight();

  const handleSend = () => {
    if (inputText.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: messages.length, text: inputText },
    ]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={[
          styles.container,
          {
            marginBottom: tabBarHeight,
          },
        ]}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.container}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.messageContainer}>
                <Text>{item.text}</Text>
              </View>
            )}
            inverted // To show the latest message at the bottom
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your message..."
              onSubmitEditing={handleSend}
              blurOnSubmit={false}
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderColor: INPUT_BORDER_COLOR,
    borderWidth: INPUT_BORDER_WIDTH,
    borderRadius: INPUT_BORDER_RADIUS,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
  },
  sendButton: {
    marginLeft: SEND_BUTTON_MARGIN_LEFT,
  },
  sendButtonText: {
    color: SEND_BUTTON_TEXT_COLOR,
  },
});

// Style constants
const INPUT_HEIGHT = 40;
const INPUT_BORDER_COLOR = "gray";
const INPUT_BORDER_WIDTH = 1;
const INPUT_BORDER_RADIUS = 20;
const INPUT_PADDING_HORIZONTAL = 10;
const SEND_BUTTON_MARGIN_LEFT = 10;
const SEND_BUTTON_TEXT_COLOR = "blue";

export default ChatScreen;
