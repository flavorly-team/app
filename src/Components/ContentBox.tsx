import {
    StyleSheet,
    ScrollView,
    useWindowDimensions,
    View,
    Text
  } from "react-native";
  import { Box } from "native-base";
import { Icon } from "./Icon";

  type Content = {
    id: number;
    title?: string;
    description: string;
};

type ContentBlock = {
  data: Content[]
}

export const ContentBox = ({data}: ContentBlock) => {
  return (
    <View style={styles.container}>
      {data
        .map((item) => 
        (
          <View key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.description}>
              <Text style={styles.bullet}>&bull;</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
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
    paddingLeft: 12,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 20,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: "#455A64",
    flex: 2,
    flexDirection: "row"
  },
  bullet: {
    fontSize: 16,
    color: '#455A64',
    marginRight: 5,
  }
});



export default ContentBox;


  
