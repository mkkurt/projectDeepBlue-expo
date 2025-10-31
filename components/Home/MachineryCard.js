import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const BG_COLOR = "#FFFFFF";
const SHADOW_COLOR = "#000";
const TEXT_COLOR = "#555";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BG_COLOR,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 2, // For Android elevation
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  detailsContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: TEXT_COLOR,
  },
});

const MachineryCard = ({ item }) => {
  const router = useRouter();

  const { id, name, description, uri } = item;

  const handlePress = () => {
    router.navigate(`machinery/${id}`);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Image source={uri} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MachineryCard;
