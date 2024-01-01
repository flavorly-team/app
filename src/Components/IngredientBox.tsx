import {
    StyleSheet,
    View,
    Text
  } from "react-native";
import { Icon } from "./Icon";

export const IngredientBox = ({data}) => {
  return (
    <View style={styles.container}>
      {data
        .map((ingredient) => 
        (
          <View key={ingredient.id}>
            <Text style={styles.title}>{ingredient.title}</Text>
                {ingredient.items.map((item) => (
                    <View style={styles.itemList} key={item.id}>
                        <View style={styles.contentLeft}>
                            <Text style={styles.bullet}>&bull;</Text>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Text style={styles.num}>{item.num}</Text>
                            {item.checked?
                            <Icon name="checkmark-circle-sharp" color="#94B49F" size={16}/>
                            :<></>}
                        </View>

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
        color: '#455A64',
        marginRight: 5,
      },
    name: {
        fontSize: 16,
        color: '#455A64',
      },
    num: {
        fontSize: 16,
        color: '#455A64',
      },
    contentLeft: {
        flex: 1,
        flexDirection: "row",
    },
    contentRight: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    
  });
  


export default IngredientBox;


  
