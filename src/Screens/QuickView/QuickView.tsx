import { LocalizationKey, i18n } from "@/Localization";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GoBackBtn } from "@/Components/GoBackBtn";
import { useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import { Box, ScrollView, Text, VStack, Spinner } from "native-base";
import { searchRecipe } from "@/Services";
import { EvilIcons } from "@expo/vector-icons";
import { RootScreens } from "..";
import { NoSearchFound } from "@/Components/NoSearchFound";

const QuickView = ({ route, navigation }) => {
  const { items } = route.params;
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchRecipe(items.join(","));
      if (response.length > 0) {
        setRecipe(response[0]);
      }
    };
    // setLoading(true);
    fetchData();
    setLoading(false);
    console.log("Done fetching");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={6} pr={6}>
        <View style={styles.row}>
          <Text fontSize="3xl" color="brand_red.500" fontFamily="Bold">
            {i18n.t(LocalizationKey.SUGGESTION)}
          </Text>
          <GoBackBtn color="#DF7861" onPress={() => navigation.goBack()} />
        </View>
      </Box>
      <View style={styles.content}>
        {!isLoading ? (
          recipe ? (
            <>
              <Image source={{ uri: recipe.image }} style={styles.image} />
              <Box flex={1.5}>
                <Text
                  ml="auto"
                  mr="auto"
                  textAlign="center"
                  fontFamily="Bold"
                  fontSize="2xl"
                  mt={3}
                  numberOfLines={2}
                  w="80%"
                >
                  {recipe.title}
                </Text>
                <Box pl={5} pr={5} flex={1}>
                  <Text fontFamily="Bold" fontSize="lg" mt={5} mb={3}>
                    Ingredients
                  </Text>
                  <ScrollView style={{ height: "100%" }}>
                    {recipe.missedIngredients.map((key, _) => {
                      return (
                        <Box
                          key={key.id}
                          flexDir="row"
                          justifyContent="space-between"
                          mb={5}
                        >
                          <Text
                            fontFamily="Regular"
                            fontSize="md"
                            ml={5}
                            maxW="85%"
                          >
                            {key.original}
                          </Text>
                          <EvilIcons name="close-o" size={24} color="red" />
                        </Box>
                      );
                    })}
                    {recipe.usedIngredients.map((key, _) => {
                      return (
                        <Box
                          key={key.id}
                          flexDir="row"
                          justifyContent="space-between"
                          mb={5}
                        >
                          <Text
                            fontFamily="Regular"
                            fontSize="md"
                            ml={5}
                            maxW="85%"
                          >
                            {key.original}
                          </Text>
                          <EvilIcons name="check" size={24} color="green" />
                        </Box>
                      );
                    })}
                  </ScrollView>
                </Box>
              </Box>
            </>
          ) : (
            <NoSearchFound />
          )
        ) : (
          <Spinner accessibilityLabel="Loading recipe" />
        )}
      </View>
      <Box pl={6} pr={6} flexDir="column" justifyContent="flex-end">
        <Button
          name={i18n.t(LocalizationKey.GET_DETAIL)}
          iconName="arrow-forward"
          color="#ffffff"
          bgColor="#94B49F"
          onPress={() =>
            navigation.navigate(RootScreens.PIN, { id: recipe.id })
          }
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default QuickView;
