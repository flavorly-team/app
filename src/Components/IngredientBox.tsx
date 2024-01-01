import { Box, Text } from "native-base";
import { StyleSheet, View, Image } from "react-native";

export const IngredientBox = ({ data }) => {
  const ingredients = data.extendedIngredients;
  return (
    <View style={styles.container}>
      {ingredients.map((item, idx) => (
        <View key={idx}>
          <Text style={styles.title}>{item.aisle}</Text>
          <Box flexDir="row" justifyContent="flex-start" alignItems="center">
            <Image
              style={{ aspectRatio: 1 / 1 }}
              source={{ uri: item.image }}
            />
            <Text fontFamily="Regular">{item.original}</Text>
          </Box>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    rowGap: 24,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 20,
    marginBottom: 6,
  },
  itemList: {
    flex: 2,
    flexDirection: "row",
    marginLeft: 12,
    padding: 8,
  },
  bullet: {
    fontSize: 16,
    color: "#455A64",
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    color: "#455A64",
  },
  num: {
    fontSize: 16,
    color: "#455A64",
  },
  contentLeft: {
    flex: 1,
    flexDirection: "row",
  },
  contentRight: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default IngredientBox;
