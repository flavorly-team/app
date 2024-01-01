import { StyleSheet, View, Text, Linking, Image } from "react-native";

export const ContentBox = ({ data, showTools, showInstructions }) => {
  const equipments = data.analyzedInstructions.equipment;
  const steps = data.analyzedInstructions.steps;

  if (showTools)
    return (
      <View style={styles.container}>
        {equipments ? (
          equipments.map((item) => (
            <View key={item.id} style={styles.description}>
              <>
                <Text style={styles.bullet}>&bull;</Text>
                <Text style={styles.description}>{item.name}</Text>
              </>
            </View>
          ))
        ) : (
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(data.sourceUrl)}
          >
            {`Read the detailed instructions on ${data.sourceName}`}
          </Text>
        )}
      </View>
    );

  if (showInstructions)
    return (
      <View style={styles.container}>
        {steps ? (
          steps.map((item) => (
            <View key={item.number}>
              <Text style={styles.title}>{`Step ${item.number}`}</Text>
              <Text style={styles.description}>{item.step}</Text>
            </View>
          ))
        ) : (
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(data.sourceUrl)}
          >
            {`Read the detailed instructions on ${data.sourceName}`}
          </Text>
        )}
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
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: 25,
  },
  bullet: {
    fontSize: 16,
    color: "#455A64",
    marginRight: 5,
  },
});

export default ContentBox;
