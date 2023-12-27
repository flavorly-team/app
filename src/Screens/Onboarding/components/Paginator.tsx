import React from "react";
import { View, StyleSheet } from "react-native";
import { OnboardingItemType } from "../slides";
export const Paginator = ({
  data,
  currentIndex,
}: {
  data: OnboardingItemType[];
  currentIndex: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 46,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {data.map((item, i) => {
        return (
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  item.id == currentIndex ? item.indicatorColor : "#E6E6E6",
              },
            ]}
            key={i.toString()}
          ></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});
