import {
    StyleSheet,
    View,
    Text
  } from "react-native";

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
            {item.title?
            <Text style={styles.title}>{item.title}</Text>
            :<></>}
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    rowGap: 12,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 20,
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#455A64",
    flex: 2,
    flexDirection: "row",
    lineHeight: 25,
  },
  bullet: {
    fontSize: 16,
    color: '#455A64',
    marginRight: 5,
  }
});



export default ContentBox;


  
