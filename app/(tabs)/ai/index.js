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
  Button,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useMutation } from "@tanstack/react-query";
import fetchChatCompletion from "@/services/chatService";
import Colors from "@/constants/Colors";
import Message from "@/components/Ai/Message";

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

  //scroll to the end of the list when new messages are added.
  const flatListRef = React.useRef();
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  //prevent the user from sending multiple messages in a row. The assistant should respond first.
  //if the last message is from the user, disable the input.

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
          sources: completionMutation.data.choices[0].sources,
          sourcesFolded: true,
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

  return (
    <SafeAreaView
      style={[styles.safeArea, { marginBottom: tabBarHeight + 30 }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <View style={styles.container}>
          <Button title="Clear" onPress={() => setMessages([])} />
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <Message item={item} setMessages={setMessages} />
            )}
          />
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
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: Colors.light.primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    color: Colors.light.primary,
  },
});

export default ChatScreen;
