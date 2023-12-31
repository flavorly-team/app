import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ScrollView, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import recipeList from "@/data/recipe";
import { Icon } from "@/Components/Icon";
import TabBar from "@/Components/TabBar";

type PinScreenScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PIN
>;

const PinScreen = ({ route, navigation }: PinScreenScreenNavigatorProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  const { id } = route.params;
  const data = recipeList.find((item) => item.id === id);
  const tabs = [
    { label: 'Dụng cụ', onPress: () => console.log('Dụng cụ tab pressed') },
    { label: 'Nguyên liệu', onPress: () => console.log('Nguyên liệu tab pressed') },
    { label: 'Hướng dẫn', onPress: () => console.log('Hướng dẫn tab pressed') },
  ];
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
              style={ styles.image }
              source={{ uri: data.image }}
            />
            <TouchableOpacity style={styles.touchable} onPress={goBack}>
              <Icon name="chevron-back-outline" color="#94B49F" size={30}/>
            </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {data.title}
          </Text>
          <Icon name="heart-outline" color="#ECB390" size={30}/>
        </View>
        <View style={styles.subtitleContainer}>
          <Icon name="time-outline" size={16} color="#263238" />
          <Text>{data.subtitle.time}</Text>
          <Icon name="person-outline" size={16} color="#263238" />
          <Text>{data.subtitle.numOfUsers}</Text>
        </View>
        <TabBar tabs={tabs}/>
      </View>
    </ScrollView>
  );
};

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
    rowGap: 12,
  },
  imageContainer: {
    width: "100%",
    marginTop: 35,
  },
  image : {
    resizeMode: 'cover',
    width: "100%",
    borderRadius: 26,
    height: deviceHeight/2,
  },
  titleContainer: {
    marginTop: 12,
    flex: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: "#DF7861",
    fontWeight: "700",
    fontFamily: "Bold",
  },
  subtitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    columnGap: 8,
  },
  touchable: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 999,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    left: 14,
    top: 20,
    padding: 2,
  },
});

export default PinScreen;
