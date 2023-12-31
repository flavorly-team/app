import { LocalizationKey, i18n } from "@/Localization";
import { RootScreens } from "..";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { GoBackBtn } from "@/Components/GoBackBtn";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Button } from "@/Components/Button";
import { Box, Icon, Input, ScrollView, Text, VStack } from "native-base";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { EmptyList } from "@/Components/EmptyList";

const IngredientTag = ({ data, key }) => {
  return (
    <Box bg="white" borderRadius={5} h={20} mb={5} style={styles.tag}>
      <Text fontFamily="Regular" fontSize="md">
        {data}
      </Text>
      <AntDesign name="close" size={24} color="lightgray" />
    </Box>
  );
};

export const Result = (props: {
  onNavigate: (string: RootScreens, params) => void;
  goBack: () => void;
  route: RouteProp<RootStackParamList, RootScreens.RESULT>;
}) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (value: string) => {
  //   setSearchTerm(value);
  // };

  const handleSearchIngredient = () => {};

  const { items } = props.route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={6} pr={6}>
        <View style={styles.row}>
          <Text fontSize="3xl" color="brand_red.500" fontFamily="Bold">
            {i18n.t(LocalizationKey.RESULT)}
          </Text>
          <GoBackBtn color="#DF7861" onPress={() => props.goBack()} />
        </View>
        <Input
          variant="rounded"
          placeholder={i18n.t(LocalizationKey.ADD_INGREDIENT)}
          borderColor="brand_green.500"
          mt={3}
          fontSize="md"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<AntDesign name="plus" size={24} />}
            />
          }
        />
      </Box>
      <View style={styles.content}>
        <ScrollView>
          <VStack flex={1}>
            {items.length > 0 ? (
              items.map((key, index) => {
                return <IngredientTag data={key} key={index} />;
              })
            ) : (
              <EmptyList />
            )}
          </VStack>
        </ScrollView>
      </View>
      {items.length > 0 && (
        <Box pl={6} pr={6} style={styles.footer}>
          <Button
            name={i18n.t(LocalizationKey.GET_SUGGESTION)}
            iconName="arrow-forward"
            color="#ffffff"
            bgColor="#94B49F"
            onPress={() =>
              props.onNavigate(RootScreens.QUICKVIEW, { items: items })
            }
          />
        </Box>
      )}
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
    backgroundColor: "rgba(217, 217, 217, 0.46)",
    marginTop: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  footer: {
    backgroundColor: "rgba(217, 217, 217, 0.46)",
  },
  tag: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    paddingHorizontal: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
