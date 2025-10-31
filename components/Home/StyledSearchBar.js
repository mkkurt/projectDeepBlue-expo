import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const SEARCH_CONTAINER_BG = Colors.black;
const SEARCH_INPUT_BG = "#e1e1e1";
const TRANSPARENT = "transparent";

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: SEARCH_CONTAINER_BG,
    borderBottomColor: TRANSPARENT,
    borderTopColor: TRANSPARENT,
  },
  searchInputContainer: {
    backgroundColor: SEARCH_INPUT_BG,
    borderRadius: 10,
  },
});

// Change the style of the search bar and preserve the props
export default function StyledSearchBar(props) {
  const [search, setSearch] = useState("");
  const onChangeText = (text) => {
    setSearch(text);
  };

  const onFocus = () => {};

  return (
    <SearchBar
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.searchInputContainer}
      onChangeText={onChangeText}
      value={search}
      onFocus={onFocus}
      {...props}
    />
  );
}
