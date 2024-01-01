import { View, StyleSheet, Image, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import { Box, VStack, ScrollView, Text } from "native-base";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import recipeList from "@/data/recipe";
import { Icon } from "@/Components/Icon";
import TabBar from "@/Components/TabBar";
import ContentBox from "@/Components/ContentBox";

type PinScreenScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PIN
>;

const PinScreen = ({ route, navigation }: PinScreenScreenNavigatorProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("");
  const goBack = () => {
    navigation.goBack();
  };
  const { id } = route.params;
  const data = recipeList.find((item) => item.id === id);

  const tabs = [
    { label: 'Dụng cụ' },
    { label: 'Nguyên liệu' },
    { label: 'Hướng dẫn' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={4} pr={4}>
            <View style={styles.imageContainer}>
                <Image
                  style={ styles.image }
                  source={{ uri: data.image }}
                />
                <TouchableOpacity style={styles.touchable} onPress={goBack}>
                  <Icon name="chevron-back-outline" color="#94B49F" size={30}/>
                </TouchableOpacity>
            </View>
      </Box>
      <View style={styles.content}>
        <ScrollView>
          <VStack flex={1}>
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
            <ContentBox data={data.tool}/>
            {/* <ContentBox data={data.instruction}/> */}
            </VStack>
            </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 12,
    padding: 24,
  },

  imageContainer: {
    width: "100%",
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image : {
    resizeMode: 'cover',
    width: "100%",
    borderRadius: 26,
    height: deviceHeight/2,
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    color: "#263238",
    fontWeight: "700",
    fontFamily: "Bold",
    lineHeight: 35,
  },
  subtitleContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'flex-start',
    columnGap: 12,
    marginBottom: 24,
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
