import { LocalizationKey, i18n } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const imageUri = require("../../assets/images/EmptyState.png");

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image source={imageUri} style={styles.image} />
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
    marginVertical: 10,
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "#263238",
    fontWeight: "700",
    fontFamily: "Bold",
  }
});
