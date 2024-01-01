import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
  NativeScrollEvent,
} from "react-native";
import Pin from "./Pin";
import { useEffect, useState } from "react";
import { NativeSyntheticEvent } from "react-native";
import { Spinner } from "native-base";
import { searchRecipes } from "@/Services";

interface IMasonryList {
  id: string;
  image: string;
  title: string;
  imageType: string;
}

const MasonryList = ({ mealType }) => {
  const width = useWindowDimensions().width;
  const vpHeight = useWindowDimensions().height;
  const number = 20;
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [pins, setPins] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const numColumns = Math.ceil(width / 350);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;
    let lastScreenOffset = scrollViewHeight - vpHeight * 3;
    if (y >= lastScreenOffset) {
      fetchNextPage();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const results: IMasonryList[] = await searchRecipes(
      number.toString(),
      (number * currentPage).toString(),
      "",
      mealType
    );
    if (results && results.length != 0) setPins([...pins, ...results]);
    else setIsDone(true);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  };

  const fetchNextPage = () => {
    if (isDone) {
      // End of data.
      return;
    }
    fetchData();
  };

  const logScrollViewSize = (width: number, height: number) => {
    setScrollViewHeight(height);
  };

  useEffect(() => {
    console.log("hello");
    fetchNextPage();
    console.log("bye");
  }, [mealType]);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      // onScroll={handleScroll}
      // onContentSizeChange={logScrollViewSize}
      // scrollEventThrottle={16}
    >
      <View style={styles.container}>
        {!isLoading ? (
          Array.from(Array(numColumns)).map((_, colIndex) => (
            <View style={styles.column} key={colIndex}>
              {pins
                .filter((_, index) => index % numColumns === colIndex)
                .map((pin) => (
                  <Pin pin={pin} key={pin.id} />
                ))}
            </View>
          ))
        ) : (
          <Spinner accessibilityLabel="Loading recipe" />
        )}
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
    justifyContent: "center",
    flex: 1,
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
