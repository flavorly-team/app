import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { MetricsSizes } from "@/Theme/Variables" 
import PlaceholderImage from "../../../assets/images/flavorly-on3.png"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const IMAGE_WIDTH = windowWidth / 2;
const MARGIN_TF = windowHeight / 10;
const MARGIN_TB = windowHeight / 100;
const PADDING_F = 24;
const PADDING_B = 12;
const BUTTON_L = windowWidth / 1.2;

export const Onboarding3 = (props: { onNavigate: (string: RootScreens) => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{i18n.t(LocalizationKey.ON3_QUOTE)}</Text>
        <Text style={styles.subquote}>{i18n.t(LocalizationKey.ON3_SUBQUOTE)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => props.onNavigate(RootScreens.MAIN)}
        >
          <Text style={styles.buttonLabel}>{i18n.t(LocalizationKey.NEXT)}</Text>
        </Pressable>
        {/* <Pressable
          style={styles.button2}
          onPress={() => props.onNavigate(RootScreens.MAIN)}
        >
          <Text style={styles.buttonLabel2}>{i18n.t(LocalizationKey.GO_HOME_NOW)}</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94B49F",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: PADDING_F,
    paddingRight: PADDING_F,
  },
  imageContainer: {
    flex: 1.5,
    marginTop: MARGIN_TF,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 90,
    borderColor: "#FFD7C0",
    borderWidth: 1,
    backgroundColor: "#FFD7C0",
  },
  quoteContainer: {
    flex: 3,
    marginTop: MARGIN_TB,
    justifyContent: "center",
    alignItems: "center",
  },
  quote: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  subquote: {
    marginTop: (MARGIN_TB + MARGIN_TB),
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    width: BUTTON_L,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: PADDING_B,
    paddingRight: PADDING_B,
    paddingTop: PADDING_B,
    paddingBottom: PADDING_B,
    borderRadius: 16,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  button2: {
    marginTop: MARGIN_TB,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel2: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});