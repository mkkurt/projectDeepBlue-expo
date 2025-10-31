import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Sources from "./Sources";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  messageContainer: {
    padding: 8,
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
    borderRadius: 10,
    borderWidth: 1,
    margin: 6,
    width: "80%",
    alignSelf: "flex-end",
  },
  assistantMessageContainer: {
    backgroundColor: Colors.light.secondary,
    alignSelf: "flex-start",
  },
  messageContent: {
    color: Colors.white,
  },
  assistantMessageContent: {
    color: Colors.black,
  },
  messageDate: {
    fontSize: 10,
    color: Colors.light.secondary,
    textAlign: "right",
  },
  assistantMessageDate: {
    color: Colors.light.primary,
  },
  showMore: {
    color: Colors.light.primary,
    textAlign: "center",
  },
});

export default function Message({ item, setMessages }) {
  return (
    <View
      key={item.created_at}
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
      {item.sources && (
        <TouchableOpacity
          onPress={() => {
            setMessages((prevMessages) => {
              const newMessages = [...prevMessages];
              const sourceMessageIndex = newMessages.findIndex(
                (message) => message.created_at === item.created_at
              );
              newMessages[sourceMessageIndex] = {
                ...newMessages[sourceMessageIndex],
                sourcesFolded: !newMessages[sourceMessageIndex].sourcesFolded,
              };
              return newMessages;
            });
          }}
        >
          <Text style={styles.showMore}>
            {item.sourcesFolded ? "Show more" : "Show less"}
          </Text>
        </TouchableOpacity>
      )}
      {item.sourcesFolded ? null : (
        <FlatList
          data={item.sources}
          renderItem={({ item: source, index }) => <Sources item={source} key={index} />}
          keyExtractor={(source) => source.doc_id}
        />
      )}
    </View>
  );
}
