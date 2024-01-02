import { LocalizationKey, i18n } from "@/Localization";
import { RootScreens } from "..";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoBackBtn } from "@/Components/GoBackBtn";
import { Icon } from "@/Components/Icon";
import { SearchBar } from "@/Components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import { Box } from "native-base";
import { IngredientCard } from "@/Components/IngredientCard";
import { NoSearchFound } from "@/Components/NoSearchFound";
import { INGREDIENT } from "@/data/ingredients";
import { SearchList } from "@/Components/SearchList";
import { debounce } from "@/Utils/debounce";
import { EmptyList } from "@/Components/EmptyList";

export type Ingredient = {
  id: Number,
  name: string,
  image: string,
}

export const Result = (props: {
  onNavigate: (string: RootScreens) => void;
  goBack: () => void;
}) => {
  const ingredients = INGREDIENT
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(ingredients);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [cart, setCart] = useState([])

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      if (value === "") {
        setSearchData([]);
        setIsLoading(false);
      } else {
        const filter1 = ingredients.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        const dupticated = cart.map((item) => item.id)
        const filter2 = filter1.filter((item) => !dupticated.includes(item.id))
        setSearchData(filter2);
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

  useEffect(() => {
    if (searchTerm != "" && modalVisible == false) {
      setModalVisible(true);
    } else if (searchTerm == "" && modalVisible == true) {
      setModalVisible(false);
    }
  }, [searchTerm]);

  const closeSearchList = () => {
    setSearchTerm("")
  }

  const addToCart = (id: Number) => {
    const ingredient = ingredients.filter((item) => item.id === id)[0]
    setCart((prev) => [
      ...prev,
      ingredient
    ])
    closeSearchList()
  }

  const removeFromCart = (id: Number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }


  return (
    <Box pl={5} pr={5} pt={12} flex={1}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.headerText}>
            {i18n.t(LocalizationKey.RESULT)}
          </Text>
          <GoBackBtn color="#DF7861" onPress={() => props.goBack()} />
        </View>
        <View style={styles.row}>
          <SearchBar
            placeholder={i18n.t(LocalizationKey.INGREDIENT_ADD)}
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <SafeAreaView style={styles.content}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <IngredientCard
              name={item.name}
              image={item.image}
              onPress={() => {}}
              onRemovePress={() => {removeFromCart(item.id)}}
            />
          )}
          ListEmptyComponent={EmptyList}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <Button
          name={i18n.t(LocalizationKey.RECOMMEND)}
          iconName="arrow-forward"
          color="#ffffff"
          bgColor="#94B49F"
          onPress={() => {}}
        />
      </View>
      {searchTerm != "" ? <SearchList ingredients={searchData} onPress={addToCart} isLoading={isLoading}/> : null}
    </Box>
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    zIndex: 1,
  },
  footer: {
    flex: 2,
    width: "100%",
  },
});
