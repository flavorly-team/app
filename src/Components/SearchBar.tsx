import React, { useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  value: string;
// onChangeText: Dispatch<SetStateAction<string>>;
  onChangeText: (value: string) => void;
};

export const SearchBar: React.FC<Props> = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={24} color="#263238" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Regular",
    color: "#263238",
  },
});