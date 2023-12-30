import React, { useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";

type Props = {
  placeholder: string;
  value: string;
// onChangeText: Dispatch<SetStateAction<string>>;
  onChangeText: (value: string) => void;
};

export const SearchBar: React.FC<Props> = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Input
          variant="filled"
          fontFamily="Regular"
          placeholder={placeholder}
          backgroundColor="gray.200"
          mt={3}
          borderRadius={8}
          size="lg"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          _light={{
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            placeholderTextColor: "blueGray.50",
          }}
          value={value}
          onChangeText={onChangeText}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});