import { i18n, LocalizationKey } from "@/Localization";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text, Input, Icon } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import MasonryList from "@/Components/MasonryList";
import { useNavigation } from "@react-navigation/native";
import recipeList from "@/data/recipe";
import { Camera } from "expo-camera";
import CustomCamera from "../Camera/CustomCamera";
import { CategoryData, MealTypes } from "@/data/meal-type";

// export interface IHomeProps {
//   data: User | undefined;
//   isLoading: boolean;
// }

// export const Home = (props: IHomeProps) => {
// const { data, isLoading } = props;
// return (
//   <View style={styles.container}>
//     <StatusBar style="auto" />
//     {isLoading ? (
//       <HStack space={2} justifyContent="center">
//         <Spinner accessibilityLabel="Loading posts" />
//         <Heading color="primary.500" fontSize="md">
//           {i18n.t(LocalizationKey.LOADING)}
//         </Heading>
//       </HStack>
//     ) : (
//       <>
//         <Text>{i18n.t(LocalizationKey.HOME)}</Text>
//         <Heading color="primary.500" fontSize="md">
//           {data?.username}
//         </Heading>
//       </>
//     )}
//   </View>
// );
// };

type ItemProps = {
  item: CategoryData;
  onPress: () => void;
  textColor: string;
  fontFamily: string;
};

type ButtonProps = {
  onPress: () => void;
  icon: JSX.Element;
  style: StyleProp<ViewStyle>;
};

const Item = ({ item, onPress, textColor, fontFamily }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text fontSize="md" style={{ color: textColor, fontFamily: fontFamily }}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const IconButton = ({ onPress, icon, style }: ButtonProps) => (
  <TouchableOpacity style={style} onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export const Home = () => {
  const [selectedMealType, setSelectedMealType] = useState<CategoryData>(
    MealTypes[0]
  );
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);

  const navigation = useNavigation();

  const getCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.getHours();
  };

  const getGreeting = (hour: number) => {
    if (hour >= 0 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };
  const greeting = useRef(getGreeting(getCurrentTime()));

  const renderItem = ({ item }: { item: CategoryData }) => {
    const color = item.id === selectedMealType.id ? "#DCA85C" : "#455A64";
    const fontFamily = item.id === selectedMealType.id ? "Bold" : "Regular";
    return (
      <Item
        item={item}
        onPress={() => setSelectedMealType(item)}
        textColor={color}
        fontFamily={fontFamily}
      />
    );
  };

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const permission = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(permission.granted);
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box pl={5} pr={5} flex={1}>
        {/* <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => setHasCameraPermission(!hasCameraPermission)}
        >
          <Text style={styles.textStyle}>Toggle permission</Text>
        </TouchableOpacity> */}
        <CustomCamera
          navigation={navigation}
          hasCameraPermission={hasCameraPermission}
          cameraVisible={cameraVisible}
          setCameraVisible={setCameraVisible}
        />
        <Text fontSize="3xl" color="brand_green.500" fontFamily="Bold">
          {`${i18n.t(LocalizationKey.GREETING1)} ${greeting.current}`}
        </Text>
        <Text fontSize="3xl" color="brand_red.500" fontFamily="Bold" mt={-2}>
          {i18n.t(LocalizationKey.GREETING2)}
        </Text>
        <Input
          variant="filled"
          fontFamily="Regular"
          placeholder={i18n.t(LocalizationKey.SEARCH_FAVORITE)}
          backgroundColor="gray.200"
          mt={3}
          borderRadius={8}
          size="lg"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          _light={{
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            placeholderTextColor: "blueGray.50",
          }}
        />
        <FlatList
          horizontal={true}
          data={MealTypes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={selectedMealType.id}
          style={{}}
        />
        <MasonryList
          mealType={selectedMealType.title.toLowerCase()}
          key={selectedMealType.id}
        />
      </Box>
      <IconButton
        onPress={() => setCameraVisible(true)}
        icon={
          <Icon
            size="10"
            color="muted.600"
            as={<Ionicons name="camera-outline" />}
          />
        }
        style={styles.cameraButton}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff222",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    height: 50,
    padding: 5,
    margin: 7,
  },
  cameraButton: {
    backgroundColor: "#DF7861",
    shadowColor: "rgba(0, 0, 0, 0.50)",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 5,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
    bottom: 20,
  },
});
