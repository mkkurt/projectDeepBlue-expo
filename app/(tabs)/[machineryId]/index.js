import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import problems from "../../../db/fueloilseparator.js";
import ProblemList from "@/components/Machinery/ProblemList.js";
import { SearchBar } from "react-native-elements";
import Fuse from "fuse.js";

const Machinery = () => {
  const [search, setSearch] = useState("");
  const [filteredProblems, setFilteredProblems] = useState(problems);
  const { machineryId } = useLocalSearchParams();

  useEffect(() => {
    console.log("machineryId", machineryId);
  }, [machineryId]);

  const fuseOptions = {
    keys: ["name", "reasons.name", "reasons.solution"],
    threshold: 0.4,
  };

  const fuse = new Fuse(problems, fuseOptions);

  const handleSearch = (text) => {
    if (text === "") {
      setFilteredProblems(problems);
    } else {
      const results = fuse.search(text, {
        includeMatches: true,
      });
      setFilteredProblems(results.map((result) => result.item));
    }
    setSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search problems..."
        onChangeText={handleSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchInputContainer}
      />
      <ProblemList problems={filteredProblems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchInputContainer: {
    backgroundColor: "#e1e1e1",
  },
});

export default Machinery;
