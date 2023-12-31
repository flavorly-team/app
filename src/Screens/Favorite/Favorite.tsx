import { i18n, LocalizationKey } from "@/Localization";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Box } from "native-base";
import { User } from "@/Services";
import { FoodCard2 } from "@/Components/FoodCard2";
import { SearchBar } from "@/Components/SearchBar";
import { debounce } from "@/Utils/debounce";
import { NoSearchFound } from "@/Components/NoSearchFound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootScreens } from "..";
import { IngredientCard } from "@/Components/IngredientCard";
import { EmptyList } from "@/Components/EmptyList";

const DATA = [
  {
    id: 1,
    name: "Apple Juice",
    cookingTime: "15 minutes",
    image:
      "https://8thwondertea.com/cdn/shop/articles/custom_resized_175073ac-3882-473d-9cc7-b98eebd67d13.jpg?v=1678563564",
  },
  {
    id: 2,
    name: "Thai Hot Pot",
    cookingTime: "45 minutes",
    image:
      "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg",
  },
  {
    id: 3,
    name: "Bún bò Huế",
    cookingTime: "60 minutes",
    image:
      "https://cdnphoto.dantri.com.vn/Q6Mat29SNVxGzhi3rVcjc3xDVcI=/thumb_w/1155/2022/04/28/thanh-pho-o-nhat-ban-them-dac-san-bun-bo-hue-cua-viet-nam-vao-thuc-dondocx-1651159044370.jpeg",
  },
];
type FoodCard = {
  id: Number;
  name: string;
  cookingTime: string;
  image: string;
};

export const Favorite = (props: {
  onNavigate: (string: RootScreens, params) => void;
}) => {
  const [data, setData] = useState<Array<FoodCard> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const f = async () => {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("@favorites");
      if (value) {
        setData(JSON.parse(value));
        setSearchData(JSON.parse(value));
        setIsLoading(false);
      } else {
        setData(DATA);
        setSearchData(DATA);
        setIsLoading(false);
      }
    };
    f();
  }, []);

  const [searchData, setSearchData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      if (value === "") {
        setSearchData(data ? data : []);
        setIsLoading(false);
      } else {
        setSearchData(
          data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
          )
        );
        setIsLoading(false);
      }
    }, 500),
    [searchData, setSearchData]
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setIsLoading(true);
    debouncedSearch(value);
  };

  // TODO
  const showRecipeDetail = (id: Number) => {
    alert("Show Recipe Detail");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={5} pr={5} flex={1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {i18n.t(LocalizationKey.MY_FAVORITE)}
          </Text>
          <SearchBar
            placeholder={i18n.t(LocalizationKey.SEARCH_FAVORITE)}
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
        {isLoading == true && (
          <View style={styles.scrollContainer}>
            <ActivityIndicator size="large" color="#94B49F" />
          </View>
        )}
        {data != null && data.length != 0 && isLoading == false && (
          <SafeAreaView style={styles.scrollContainer}>
            <FlatList
              data={searchData}
              renderItem={({ item }) => (
                <FoodCard2
                  name={item.name}
                  cookingTime={item.cookingTime}
                  image={item.image}
                  onPress={() =>
                    props.onNavigate(RootScreens.PIN, { id: item.id })
                  }
                />
              )}
              ListEmptyComponent={NoSearchFound}
            />
          </SafeAreaView>
        )}
        {data != null && data.length == 0 && (
          <View style={styles.scrollContainer}>
            <EmptyList />
          </View>
        )}
      </Box>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     flex: 2,
//     width: "100%",
//     marginTop: 30,
//     paddingLeft: 30,
//     paddingRight: 30,
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
//   headerText: {
//     fontSize: 30,
//     color: "#DF7861",
//     fontWeight: "700",
//     fontFamily: "Bold",
//   },
//   scrollContainer: {
//     flex: 6,
//     width: "100%",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 20,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 30,
    color: "#DF7861",
    fontWeight: "700",
    fontFamily: "Bold",
  },
  scrollContainer: {
    flex: 6,
  },
});
