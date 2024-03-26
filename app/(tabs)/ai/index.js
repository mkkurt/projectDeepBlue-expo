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
import { useQuery, useMutation } from "@tanstack/react-query";
import fetchChatCompletion from "@/services/chatService";
import Colors from "@/constants/Colors";

// Color constants
const SEND_BUTTON_TEXT_COLOR = "blue";

const ChatScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();

  const completionMutation = useMutation({
    mutationFn: (messages) => fetchChatCompletion(messages),
    retry: 0,
    onError: (error) => {
      //find the message with the key "loading" and replace it with the error message.
      setMessages((prevMessages) => {
        const loadingMessageIndex = prevMessages.findIndex(
          (message) => message.key === "loading"
        );
        const newMessages = [...prevMessages];
        newMessages[loadingMessageIndex] = {
          role: "assistant",
          content: error.message,
        };
        return newMessages;
      });
    },
  });

  //if a specific mutation is happening, add a loading message to the chat with a specific key.
  //if that specific mutation is successful, fill that message with the response data.
  //if that specific mutation fails, fill that message with the error message.

  useEffect(() => {
    console.log("useEffect initiated for completionMutation");
    if (completionMutation.isPending) {
      console.log("pending");
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "Loading...",
          key: "loading",
          created_at: new Date().toISOString(),
        },
      ]);
    }
    if (completionMutation.isSuccess) {
      console.log("success");
      setMessages((prevMessages) => {
        const loadingMessageIndex = prevMessages.findIndex(
          (message) => message.key === "loading"
        );
        const newMessages = [...prevMessages];
        newMessages[loadingMessageIndex] = {
          role: "assistant",
          content: completionMutation.data.choices[0].message.content,
          created_at: new Date().toISOString(),
        };
        return newMessages;
      });
    }
  }, [completionMutation.isPending, completionMutation.isSuccess]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: inputText,
        sent: false,
        created_at: new Date().toISOString(),
      },
    ]);
    setInputText("");
  };

  //when setMessages is called, it will trigger the mutation.
  useEffect(() => {
    if (messages?.length > 0 && messages[messages.length - 1].sent === false) {
      const filteredMessages = messages.filter(
        (message) => message.role === "user" || message.role === "assistant"
      );
      completionMutation.mutate(filteredMessages);
    }
  }, [messages]);

  const renderMessage = ({ item }) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.role === "assistant" && styles.assistantMessageContainer,
        ]}
      >
        <Text
          style={[
            styles.messageContent,
            item.role === "assistant" && styles.assistantMessageContent,
          ]}
        >
          {item.content.trim()}
        </Text>
        <Text
          style={[
            styles.messageDate,
            item.role === "assistant" && styles.assistantMessageDate,
          ]}
        >
          {item.created_at
            ? new Date(item.created_at).toLocaleTimeString([], {
                minute: "2-digit",
                second: "2-digit",
              })
            : ""}
        </Text>
        {/* {item.role === "assistant" && completionMutation.isPending && (
        <Text>...</Text>
      )} */}
      </View>
    );
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
          <FlatList data={messages} renderItem={renderMessage} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your message..."
              onSubmitEditing={() => handleSendMessage(inputText)}
              blurOnSubmit={false}
            />
            <TouchableOpacity
              onPress={handleSendMessage}
              style={styles.sendButton}
            >
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
    // display: "flex",
  },
  messageContainer: {
    padding: 8,
    backgroundColor: Colors.light.chat.user,
    borderRadius: 10,
    borderWidth: 1,
    margin: 6,
    // display: "flex",
    width: "80%",
    alignSelf: "flex-end",
  },
  assistantMessageContainer: {
    backgroundColor: Colors.light.chat.assistant,
    alignSelf: "flex-start",
  },
  messageContent: {
    color: Colors.light.chat.userText,
  },
  assistantMessageContent: {
    color: Colors.light.chat.assistantText,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: Colors.light.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    color: SEND_BUTTON_TEXT_COLOR,
  },
  messageDate: {
    fontSize: 10,
    color: Colors.light.chat.userText,
    textAlign: "right",
  },
  assistantMessageDate: {
    color: Colors.light.chat.assistantText,
  },
});

export default ChatScreen;
