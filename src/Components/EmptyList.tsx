import { LocalizationKey, i18n } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { EmptyIcon } from "./EmptyIcon";

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <EmptyIcon />
      <Text style={styles.text}>{i18n.t(LocalizationKey.EMPTY)}</Text>
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
    marginTop: 10,
    fontSize: 16,
    color: "#263238",
    fontWeight: "700",
    fontFamily: "Bold",
  },
});
