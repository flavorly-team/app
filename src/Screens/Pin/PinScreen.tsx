import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Box, VStack, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import recipeList from "@/data/recipe";
import { Icon } from "@/Components/Icon";
import TabBar from "@/Components/TabBar";
import ContentBox from "@/Components/ContentBox";
import IngredientBox from "@/Components/IngredientBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkFavorite } from "@/Utils/checkFavorite";
import { addFavorite, removeFavorite } from "@/Utils/setFavorite";

type PinScreenScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PIN
>;

const PinScreen = ({ route, navigation }: PinScreenScreenNavigatorProps) => {
  const tabs = [
    { label: "Dụng cụ" },
    { label: "Nguyên liệu" },
    { label: "Hướng dẫn" },
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].label);
  const renderContent = (label) => {
    switch (label) {
      case "Dụng cụ":
        return <ContentBox data={data.tool} />;
      case "Nguyên liệu":
        return <IngredientBox data={data.ingredient} />;
      case "Hướng dẫn":
        return <ContentBox data={data.instruction} />;
      default:
        return null;
    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  const { id } = route.params;
  const data = recipeList.find((item) => item.id === id);

  // Get Favorites from AsyncStorage
  const [favorites, setFavorites] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const f = async () => {
      const store = await AsyncStorage.getItem("@favorites");
      if (store === null) {
        setFavorites([]);
        setIsLiked(checkFavorite(id, []));
      } else {
        setFavorites(JSON.parse(store));
        setIsLiked(checkFavorite(id, JSON.parse(store)));
      }
    };
    f();
  }, []);

  const onLike = async () => {
    if (isLiked) {
      removeFavorite(id)
      setIsLiked(false)
    }
    else {
      addFavorite(id, data.image, data.title)
      setIsLiked(true)
    }
  };

  const handleTabChange = (label) => {
    setSelectedTab(label);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={4} pr={4}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <TouchableOpacity style={styles.touchable} onPress={goBack}>
            <Icon name="chevron-back-outline" color="#94B49F" size={30} />
          </TouchableOpacity>
        </View>
      </Box>
      <View style={styles.content}>
        <ScrollView>
          <VStack flex={1}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Pressable onPress={onLike}>
                <Icon name={isLiked ? "heart" : "heart-outline"} color="#ECB390" size={30} />
              </Pressable>
            </View>
            <View style={styles.subtitleContainer}>
              <Icon name="time-outline" size={16} color="#263238" />
              <Text>{data.subtitle.time}</Text>
              <Icon name="person-outline" size={16} color="#263238" />
              <Text>{data.subtitle.numOfUsers}</Text>
            </View>
            <TabBar tabs={tabs} onTabChange={handleTabChange} />
            {renderContent(selectedTab)}
          </VStack>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const deviceHeight = Dimensions.get("window").height;

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
  image: {
    resizeMode: "cover",
    width: "100%",
    borderRadius: 26,
    height: deviceHeight / 3,
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
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
    alignItems: "flex-start",
    columnGap: 12,
    marginBottom: 24,
  },
  touchable: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 999,
    shadowColor: "black",
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
