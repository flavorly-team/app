import { MetricsSizes } from "@/Theme/Variables";
import { Dimensions, ImageBackground, View, StyleSheet } from "react-native";
import { ImageSourcePropType } from "react-native";

export default function ImageBg(props: {
  PlaceholderImage: ImageSourcePropType;
}) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={props.PlaceholderImage} style={styles.image} />
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const IMAGE_WIDTH = windowWidth / 2;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    marginTop: MetricsSizes["SMALL"],
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 90,
    borderColor: "#FFD7C0",
    borderWidth: 1,
    backgroundColor: "#FFD7C0",
  },
});