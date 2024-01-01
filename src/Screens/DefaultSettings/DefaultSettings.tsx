import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootScreens } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoBackBtn } from "../../Components/GoBackBtn";
export interface SettingType {
  name: string;
  options: string[];
}

export const DefaultSettings = (props: {
  setting: SettingType;
  goBack: () => void;
  onNavigate: (string: RootScreens) => void;
}) => {
  const setting = props.setting;
  const [choosenItem, setChoosenItem] = useState(0);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Cài đặt</Text>
          <GoBackBtn color="#94B49F" onPress={() => props.goBack()} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.settingTypeName}>{setting.name}</Text>
          {setting.options.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.btn,
                index === choosenItem
                  ? { backgroundColor: "#DF7861" }
                  : { borderWidth: 1, borderColor: "#DF7861" },
              ]}
              onPress={() => setChoosenItem(index)}
            >
              <Text
                style={[
                  styles.btnText,
                  choosenItem === index
                    ? { color: "white" }
                    : { color: "#DF7861" },
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    rowGap: 10,
  },
  headingWrapper: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "Bold",
    fontSize: 30,
    color: "#94B49F",
  },
  wrapper: {
    borderRadius: 16,
    borderWidth: 0.5,
    paddingHorizontal: 16,
    borderColor: "#E0E0E0",
    backgroundColor: "white",
    paddingVertical: 20,
    rowGap: 20,
  },
  settingTypeName: {
    color: "#DF7861",
    fontFamily: "Bold",
    fontSize: 20,
  },
  settingName: {
    fontFamily: "Regular",
    fontSize: 18,
  },
  btn: {
    borderRadius: 16,
    paddingLeft: 24,
    height: 50,
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Bold",
    fontSize: 16,
  },
});
