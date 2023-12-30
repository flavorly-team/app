import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LocalizationKey, i18n } from "@/Localization";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Input, Icon } from "native-base";

type Props = {
  value: string;
  // onChangeText: Dispatch<SetStateAction<string>>;
  onChangeText: (value: string) => void;
};

export const SearchBar: React.FC<Props> = ({ value, onChangeText }) => {
  return (
    // <View style={styles.searchBar}>
    //   <Feather name="search" size={24} color="#263238" />
    //   <TextInput
    //     style={styles.searchInput}
    //     placeholder={i18n.t(LocalizationKey.SEARCH_FAVORITE)}
    //     value={value}
    //     onChangeText={onChangeText}
    //   />
    // </View>
    <Input
      value={value}
      onChangeText={onChangeText}
      variant="filled"
      fontFamily="Regular"
      placeholder={i18n.t(LocalizationKey.SEARCH_FAVORITE)}
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
    />
  );
};

// const styles = StyleSheet.create({
//   searchBar: {
//     flexDirection: "row",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#F0EEEE",
//     borderRadius: 5,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     marginLeft: 10,
//     fontFamily: "Regular",
//     color: "#263238",
//   },
// });
