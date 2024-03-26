import { SearchBar } from "react-native-elements";
import { Keyboard, StyleSheet, View } from "react-native";
import { useState } from "react";

//change the style of the search bar and preserve the props
export default StyledSearchBar = (props) => {
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
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "black",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchInputContainer: {
    backgroundColor: "#e1e1e1",
    borderRadius: 10,
  },
});
