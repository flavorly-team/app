import { LocalizationKey, i18n } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { NoSearchIcon } from "./NoSearchIcon";

export const NoSearchFound = () => {
  return (
    <View style={styles.container}>
      <NoSearchIcon />
      <Text style={styles.text}>{i18n.t(LocalizationKey.NOT_FOUND)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#263238",
    fontWeight: "700",
    fontFamily: "Bold",
  },
});
