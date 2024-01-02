import { LocalizationKey, i18n } from "@/Localization";
import { Box, Modal } from "native-base";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "./SearchBar";
import { INGREDIENT } from "@/data/ingredients";
import { IngredientCard } from "./IngredientCard";
import { NoSearchFound } from "./NoSearchFound";
import { SearchItem } from "./SearchItem";
import { Ingredient } from "@/Screens/Result - OLD/Result";
import { SafeAreaView } from "react-native-safe-area-context";


type Props = {
  ingredients: Array<Ingredient>;
  onPress: any;
  isLoading: boolean;
};

export const SearchList: React.FC<Props> = ({
  ingredients,
  onPress,
  isLoading,
}) => {
  return (
    <Box style={styles.container}>
      <View style={styles.content}>
        {/* <Text style={styles.headerText}>
          {i18n.t(LocalizationKey.ADD_INGREDIENT)}
        </Text>
        <SearchBar
          placeholder={i18n.t(LocalizationKey.INGREDIENT_ADD)}
          value={searchValue}
          onChangeText={onChangeText}
        /> */}
        {isLoading == true ? (
          <View style={styles.scrollView}>
            <ActivityIndicator size="large" color="#94B49F" />
          </View>
        ) : (
          <SafeAreaView style={styles.scrollView}>
            <FlatList
              data={ingredients}
              renderItem={({ item }) => (
                <SearchItem
                  name={item.name}
                  image={item.image}
                  onPress={() => {
                    onPress(item.id);
                  }}
                />
              )}
              ListEmptyComponent={NoSearchFound}
            />
          </SafeAreaView>
        )}
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    position: "absolute",
    top: 140,
    left: 20,
    zIndex: 2,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  scrollView: {
    height: 280,
    backgroundColor: "#fff",
  },
});
