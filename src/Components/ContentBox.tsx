import { StyleSheet, View, Text } from "react-native";

type Equipments = {
  id: string;
  name: string;
  localizedName: string;
  image: string;
};

export const ContentBox = ({ data, showTools, showInstructions }) => {
  const steps = data.analyzedInstructions[0].steps;
  let combinedEquipment: Equipments[] = steps
    ? steps.reduce((acc, step) => {
        return [...acc, ...step.equipment];
      }, [])
    : [];
  let uniqueIds = new Set();
  let equipments: Equipments[] = [];
  combinedEquipment.forEach((obj) => {
    if (!uniqueIds.has(obj.id)) {
      uniqueIds.add(obj.id);
      equipments.push(obj);
    }
  });

  if (showTools)
    return (
      <>
        {equipments.length > 0 && (
          <View style={styles.container}>
            {equipments.map((item) => (
              <View key={item.id} style={styles.description}>
                <>
                  <Text style={styles.bullet}>&bull;</Text>
                  <Text style={styles.description}>{item.name}</Text>
                </>
              </View>
            ))}
          </View>
        )}
      </>
    );

  if (showInstructions)
    return (
      <>
        {steps && (
          <View style={styles.container}>
            {steps.map((item) => (
              <View key={item.number}>
                <Text style={styles.title}>{`Step ${item.number}`}</Text>
                <Text style={styles.description}>{item.step}</Text>
              </View>
            ))}
          </View>
        )}
      </>
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
