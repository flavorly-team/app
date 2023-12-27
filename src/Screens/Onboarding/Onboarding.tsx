import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  ViewToken,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RootScreens } from "..";
import slides, { OnboardingItemType } from "./slides";
import { OnboardingItem } from "./components/OnboardingItem";
import { Paginator } from "./components/Paginator";
import { ArrowForwardIcon } from "native-base";
import { WelcomeItem } from "./components/WelcomItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Onboarding = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index as number);
    }
  ).current;

  const isLastItem = () => currentIndex === slides.length - 1;

  const isFirstItem = () => currentIndex === 0;

  const scrollTo = () => {
    if (!isLastItem()) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      props.onNavigate(RootScreens.MAIN);
    }
  };

  useEffect(() => {
    const setViewedOnboarding = async () => {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
      } catch (error) {
        console.log("Error @setItem: ", error);
      }
    };
    setViewedOnboarding();
  }, []);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) =>
            item.id !== 0 ? (
              <OnboardingItem item={item} />
            ) : (
              <WelcomeItem item={item} />
            )
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonNextContainer, { width }]}>
          {isFirstItem() ? (
            <View style={{ height: 10 }}></View>
          ) : (
            <Paginator
              data={slides.slice(1) as OnboardingItemType[]}
              currentIndex={currentIndex}
            />
          )}
          <TouchableOpacity
            style={[styles.buttonNext, isFirstItem() && styles.buttonInWelcome]}
            onPress={scrollTo}
          >
            <Text
              style={[
                styles.buttonNextText,
                isFirstItem() && styles.buttonInWelComeText,
              ]}
            >
              {currentIndex === slides.length - 1
                ? "Bắt đầu với Flavorly"
                : "Tiếp theo"}
            </Text>
          </TouchableOpacity>
        </View>
        {!isLastItem() && (
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => props.onNavigate(RootScreens.MAIN)}
          >
            <View style={styles.buttonStartTextWrapper}>
              <Text
                style={[
                  styles.buttonStartText,
                  isFirstItem() && styles.buttonStartInWelcomeText,
                ]}
              >
                Hoặc bắt đầu với Flavorly ngay!
              </Text>
            </View>
            <ArrowForwardIcon
              size="18px"
              color={
                isFirstItem() ? styles.buttonStartInWelcomeText.color : "white"
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    height: 120,
  },
  buttonNextContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
    rowGap: 10,
    paddingHorizontal: 24,
  },
  buttonNextText: {
    fontFamily: "Bold",
    fontSize: 19,
    textAlign: "center",
  },
  buttonStartText: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 13,
  },
  buttonStart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
  buttonStartTextWrapper: {
    width: 205,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNext: {
    backgroundColor: "white",
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonInWelComeText: {
    color: "white",
  },
  buttonInWelcome: {
    backgroundColor: "#ECB390",
  },
  buttonStartInWelcomeText: {
    color: "#32324D",
  },
});
