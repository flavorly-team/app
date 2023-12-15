import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const getStyleByRadius = (radius: number, color: string) =>
  StyleSheet.create({
    dot: {
      height: 7,
      width: 7,
      borderRadius: 7 / 2,
      top: radius,
      backgroundColor: color,
    },
    dotCircle: {
      justifyContent: "center",
      alignItems: "center",
      height: radius * 2,
      width: radius * 2,
      borderRadius: radius,
      position: "absolute",
      top: 0,
      bottom: 0,
    },
  });

export const RotateDot = ({
  radius,
  color,
  speed,
}: {
  radius: number;
  color: string;
  speed: number;
}) => {
  const styles = getStyleByRadius(radius, color);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.View
      style={[
        styles.dotCircle,
        {
          transform: [{ rotate: spin }],
        },
      ]}
    >
      <View style={styles.dot}></View>
    </Animated.View>
  );
};
