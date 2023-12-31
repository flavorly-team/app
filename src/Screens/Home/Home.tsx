import { i18n, LocalizationKey } from "@/Localization";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert,
  View,
  Pressable,
  Image,
  StyleProp,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import { HStack, Spinner, Heading, Box, Text, Input, Icon } from "native-base";
import { detectFood, uploadIbb, User } from "@/Services";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Camera, CameraType, FlashMode } from "expo-camera";
import Constants from "expo-constants";
import { DATA, CategoryData, pins } from "@/data/pins";
import MasonryList from "@/Components/MasonryList";
import { RootScreens } from "..";
import { useNavigation } from "@react-navigation/native";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

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
  const [selectedId, setSelectedId] = useState<string>("1");
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const cameraRef = useRef(null);

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

  // gonna take some mins
  const handleDetection = async () => {
    // console.log("Start uploading");
    // const url = await uploadIbb(imageBase64);
    // console.log("End uploading");

    // if (url) {
    //   let foodNames = [];
    //   console.log("Start detection");
    //   let detected = await detectFood(url);
    //   if (detected && detected[0].value != 0) {
    //     detected = detected.slice(0, 5).filter((item) => item.value >= 0.3);
    //     foodNames = detected.map((item) => item.name);
    //   }
    //   console.log(detected);
    //   console.log("End detection");

    //   setImageURL(null);
    //   setModalVisible(!modalVisible);
    //   navigation.navigate(RootScreens.RESULT, { items: foodNames });
    // } else {
    //   Alert.alert("Cannot process your image");
    // }

    // test
    setImageURL(null);
    setModalVisible(!modalVisible);
    navigation.navigate(RootScreens.RESULT, {
      items: ["apple", "pork", "tomato", "butter", "potato"],
    });
  };

  const renderItem = ({ item }: { item: CategoryData }) => {
    const color = item.id === selectedId ? "#DCA85C" : "#455A64";
    const fontFamily = item.id === selectedId ? "Bold" : "Regular";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={color}
        fontFamily={fontFamily}
      />
    );
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({ base64: true });
        setImageURL(data.uri);
        setImageBase64(data.base64);
      } catch (error) {
        console.log(error);
      }
    }
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {hasCameraPermission ? (
            <View style={styles.containerCamera}>
              {!imageURL ? (
                <Camera
                  style={styles.camera}
                  type={type}
                  ref={cameraRef}
                  flashMode={flash}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton
                      onPress={() => setModalVisible(!modalVisible)}
                      icon={
                        <Icon
                          size="10"
                          color="muted.600"
                          as={<Ionicons name="close-outline" />}
                        />
                      }
                      style={styles.button}
                    />
                    <IconButton
                      onPress={() => {
                        setType(
                          type === CameraType.back
                            ? CameraType.front
                            : CameraType.back
                        );
                      }}
                      icon={
                        <Icon
                          size="10"
                          color="muted.600"
                          as={<Ionicons name="camera-reverse-outline" />}
                        />
                      }
                      style={styles.button}
                    />
                    <IconButton
                      onPress={() =>
                        setFlash(
                          flash === FlashMode.off ? FlashMode.on : FlashMode.off
                        )
                      }
                      icon={
                        flash === FlashMode.off ? (
                          <Icon
                            size="10"
                            color="muted.600"
                            as={<Ionicons name="flash-outline" />}
                          />
                        ) : (
                          <Icon
                            size="10"
                            color="muted.600"
                            as={<Ionicons name="flash-off-outline" />}
                          />
                        )
                      }
                      style={styles.button}
                    />
                  </View>
                </Camera>
              ) : (
                <Image source={{ uri: imageURL }} style={styles.camera} />
              )}

              <View
                style={[
                  styles.controls,
                  // { justifyContent: image ? "space-between" : "center" },
                ]}
              >
                {imageURL ? (
                  <>
                    <IconButton
                      onPress={() => setImageURL(null)}
                      icon={
                        <Icon
                          size="10"
                          color="brand_red.500"
                          as={<Ionicons name="reload-outline" />}
                        />
                      }
                      style={styles.button}
                    />
                    <IconButton
                      onPress={handleDetection}
                      icon={
                        <Icon
                          size="10"
                          color="brand_red.500"
                          as={<Ionicons name="checkmark-outline" />}
                        />
                      }
                      style={styles.button}
                    />
                  </>
                ) : (
                  <IconButton
                    onPress={takePicture}
                    icon={
                      <Icon
                        size="10"
                        color="brand_red.500"
                        as={<Ionicons name="radio-button-on-outline" />}
                      />
                    }
                    style={styles.button}
                  />
                )}
              </View>
            </View>
          ) : (
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  This app does not have permission to use your camera!
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Modal>
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
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          style={{}}
        />
        <MasonryList pins={pins} />
      </Box>
      <IconButton
        onPress={() => setModalVisible(true)}
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  containerCamera: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
  },
  controls: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 100,
  },
});
