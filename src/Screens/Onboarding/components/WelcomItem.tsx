import React from "react";
import {
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { WelcomeItemType } from "../slides";
import { RotateDot } from "./RotateDot";

export const WelcomeItem = ({ item }: { item: WelcomeItemType }) => {
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
          flex: 0.6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.outerCircle}>
          <View style={styles.innerCirlce}>
            <RotateDot radius={313 / 2} color={"#FFE7BB"} speed={6000} />
            <RotateDot radius={313 / 2} color={"#FFC861"} speed={5000} />
            <Image
              source={item.illustrator}
              style={{
                height: 222,
                width: 222,
                borderRadius: 222 / 2,
                backgroundColor: item.backgroundImageColor,
              }}
            />
          </View>
          <RotateDot radius={443 / 2} color={"#8981AE"} speed={4000} />
          <RotateDot radius={443 / 2} color={"#FF9556"} speed={3000} />
        </View>
      </View>

      <View style={{ flex: 0.4 }}>
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>{item.slogan}</Text>
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
  sloganContainer: {
    height: 155,
    justifyContent: "center",
  },
  slogan: {
    color: "#000",
    fontSize: 45,
    fontFamily: "CormorantSC_400Regular",
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
});
