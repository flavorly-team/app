import React from "react";
import {
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { OnboardingItemType } from "../slides";
import { RotateDot } from "./RotateDot";

export const OnboardingItem = ({ item }: { item: OnboardingItemType }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        { width, backgroundColor: item.backgroundColor },
      ]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.outerCircle}>
          <View style={styles.innerCirlce}>
            <RotateDot radius={313 / 2} color={"#FFE7BB"} speed={6000} />
            <RotateDot radius={313 / 2} color={"#FFC861"} speed={5000} />
            <View style={styles.illustratorBackground}></View>
            <Image source={item.illustrator} />
          </View>
          <RotateDot radius={443 / 2} color={"#8981AE"} speed={4000} />
          <RotateDot radius={443 / 2} color={"#FF9556"} speed={3000} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 14,
    paddingHorizontal: 25,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontFamily: "Bold",
    textAlign: "center",
  },
  desription: {
    color: "white",
    fontSize: 19,
    fontFamily: "Regular",
    textAlign: "center",
  },
  innerCirlce: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFD7C0",
    borderWidth: 1,
    height: 313,
    width: 313,
    borderRadius: 313 / 2,
  },
  outerCircle: {
    position: "absolute",
    bottom: -60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFD7C0",
    borderWidth: 1,
    height: 443,
    width: 443,
    borderRadius: 443 / 2,
  },
  illustratorBackground: {
    position: "absolute",
    top: (313 - 177) / 2,
    height: 177,
    width: 177,
    borderRadius: 177 / 2,
    backgroundColor: "#FFD7C0",
  },
});
