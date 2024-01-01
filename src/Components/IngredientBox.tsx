import { IngredientList } from "@/data/recipe";
import { Ionicons } from "@expo/vector-icons";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import {
    StyleSheet,
    ScrollView,
    useWindowDimensions,
    View,
    Text
  } from "react-native";

export const IngredientBox = ({ingredients}) => {
  return (
    <View style={styles.container}>
    {ingredients.map((ingredient) => (
      <View key={ingredient.id}>
        <Text style={styles.title}>{ingredient.title}</Text>
        {ingredient.items.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.num}</Text>
            {item.checked && <Ionicons name="checkmark-circle-outline" size={20} color="green" />}
          </View>
        ))}
      </View>
    ))}
  </View>
  )

}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#E0E0E0",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#fff",
    gap: 12,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
});



export default IngredientBox;


  
