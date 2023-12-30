import { LocalizationKey, i18n } from "@/Localization";
import { RootScreens } from "..";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { GoBackBtn } from "@/Components/GoBackBtn";
import { Icon } from "@/Components/Icon";
import { SearchBar } from "@/Components/SearchBar";
import { useState } from "react";
import { Button } from "@/Components/Button";

export const Result = (props: {
  onNavigate: (string: RootScreens) => void;
  goBack: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.headerText}>
            {i18n.t(LocalizationKey.RESULT)}
          </Text>
          <GoBackBtn color="#DF7861" onPress={() => props.goBack()} />
        </View>
        <View style={styles.row}>
          <SearchBar placeholder={"Nhập tên"} value={searchTerm} onChangeText={handleSearch} />
        </View>
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <Button name={i18n.t(LocalizationKey.RECOMMEND)} iconName="arrow-forward" color="#ffffff" bgColor="#94B49F" onPress={() => {}} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    width: "100%",
    marginTop: 35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 30,
    color: "#DF7861",
    fontWeight: "700",
    fontFamily: "Bold",
  },
  content: {
    flex: 7,
    width: "100%",
  },
  footer: {
    flex: 2,
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
  }
});
