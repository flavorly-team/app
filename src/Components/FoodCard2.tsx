import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { i18n, LocalizationKey } from "@/Localization";
import { MetricsSizes } from "@/Theme/Variables";
import { Icon } from "./Icon";

type Props = {
  name: string;
  cookingTime: string;
  image: any;
};

export const FoodCard2: React.FC<Props> = ({ name, cookingTime, image }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.cookingTime}>
            <Icon name="time-outline" size={16} color="#263238" />
            <Text style={styles.cookingTimeText}>{cookingTime}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const IMAGE_WIDTH = (windowWidth * 8) / 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: windowWidth,
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  content: {
    width: windowWidth,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 16,
    color: "#263238",
  },
  cookingTime: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  cookingTimeText: {
    fontSize: 16,
    color: "#263238",
    fontWeight: "700"
  }
});
