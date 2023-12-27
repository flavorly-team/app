import { i18n, LocalizationKey } from "@/Localization";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { FoodCard2 } from "@/Components/FoodCard2";
import { SearchBar } from "@/Components/SearchBar";
import { debounce } from "@/Utils/debounce";
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
    name: "Apple Juice",
    cookingTime: "15 minutes",
    image:
      "https://8thwondertea.com/cdn/shop/articles/custom_resized_175073ac-3882-473d-9cc7-b98eebd67d13.jpg?v=1678563564",
  },
  {
    id: 3,
    name: "Apple Juice",
    cookingTime: "15 minutes",
    image:
      "https://8thwondertea.com/cdn/shop/articles/custom_resized_175073ac-3882-473d-9cc7-b98eebd67d13.jpg?v=1678563564",
  },
];
type FoodCard = {
  id: Number;
  name: string;
  cookingTime: string;
  image: string;
}

export const Favorite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(DATA);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      if (value === "") {
        setData(DATA)
      }
      else {
        setData(DATA.filter((item) => item.name.includes(value)))
      }
    }, 1000),
    [setData]
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {i18n.t(LocalizationKey.MY_FAVORITE)}
        </Text>
        <SearchBar value={searchTerm} onChangeText={handleSearch}/>
      </View>
      <SafeAreaView style={styles.scrollContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <FoodCard2
              name={item.name}
              cookingTime={item.cookingTime}
              image={item.image}
            />
          )}
          ListEmptyComponent={EmptyList}
        />
      </SafeAreaView>
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
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 30,
    color: "#DF7861",
    fontWeight: "700",
    fontFamily: "Bold"
  },
  scrollContainer: {
    flex: 6,
    width: "100%",
  },
});
