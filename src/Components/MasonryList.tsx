import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import Pin from "./Pin";

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
  favorites: any
}

const MasonryList = ({ pins, favorites }: IMasonryList) => {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 350);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} favorites={favorites}/>
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
