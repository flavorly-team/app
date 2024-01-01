import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { RootScreens } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { Switch } from "react-native-switch";

export const Settings = (props: {
  onNavigate: (screen: RootScreens, params) => void;
}) => {
  const [pushNoti, setPushNoti] = useState(false);
  const togglePushNoti = () => setPushNoti((previousState) => !previousState);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((previousState) => !previousState);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Cài đặt</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.settingsGroupContainer}>
            <Text style={styles.settingTypeName}>Đề xuất mặc định</Text>
            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() =>
                props.onNavigate(RootScreens.DEFAULT_SETTINGS, {
                  settingName: "cuisine-styles",
                })
              }
            >
              <Text style={styles.settingName}>Phong cách ẩm thực</Text>
              <Icon name="right" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() =>
                props.onNavigate(RootScreens.DEFAULT_SETTINGS, {
                  settingName: "meals",
                })
              }
            >
              <Text style={styles.settingName}>Bữa ăn</Text>
              <Icon name="right" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() =>
                props.onNavigate(RootScreens.DEFAULT_SETTINGS, {
                  settingName: "diets",
                })
              }
            >
              <Text style={styles.settingName}>Chế độ dinh dưỡng</Text>
              <Icon name="right" size={16} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.settingsGroupContainer}>
            <Text style={styles.settingTypeName}>Khác</Text>
            <View style={styles.settingBtn}>
              <Text style={styles.settingName}>Thông báo đẩy</Text>
              <Switch
                value={pushNoti}
                onValueChange={togglePushNoti}
                activeText=""
                inActiveText=""
                circleSize={22}
                barHeight={29}
                switchLeftPx={4}
                switchRightPx={4}
                circleBorderWidth={0}
                backgroundInactive="#EAEAEA"
                backgroundActive="#DF7861"
                switchBorderRadius={20}
              />
            </View>
            <View style={styles.settingBtn}>
              <Text style={styles.settingName}>Dark mode</Text>
              <Switch
                value={darkMode}
                onValueChange={toggleDarkMode}
                activeText=""
                inActiveText=""
                circleSize={22}
                barHeight={29}
                switchLeftPx={4}
                switchRightPx={4}
                circleBorderWidth={0}
                backgroundInactive="#EAEAEA"
                backgroundActive="#DF7861"
                switchBorderRadius={20}
              />
            </View>
          </View>
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
  },
  heading: {
    fontFamily: "Bold",
    fontSize: 30,
    color: "#94B49F",
  },
  wrapper: {
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    backgroundColor: "white",
    paddingVertical: 20,
    rowGap: 20,
  },
  settingsGroupContainer: {
    rowGap: 32,
    paddingHorizontal: 20,
  },
  settingTypeName: {
    color: "#ADADAD",
    fontFamily: "Regular",
    fontSize: 18,
  },
  settingName: {
    fontFamily: "Regular",
    fontSize: 18,
  },
  settingBtn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#CACACA",
  },
});
