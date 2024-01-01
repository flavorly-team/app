import { detectFood, uploadIbb } from "@/Services";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { Icon, IconButton, Spinner } from "native-base";
import { useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RootScreens } from "..";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const CustomCamera = ({
  navigation,
  hasCameraPermission,
  cameraVisible,
  setCameraVisible,
}) => {
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [imageURL, setImageURL] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const cameraRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // gonna take some mins
  const handleDetection = async () => {
    setIsLoading(true);
    console.log("Start uploading");
    const url = await uploadIbb(imageBase64);
    console.log("End uploading");

    if (url) {
      let foodNames = [];
      console.log("Start detection");
      let detected = await detectFood(url);
      if (detected && detected[0].value != 0) {
        detected = detected.slice(0, 5).filter((item) => item.value >= 0.3);
        foodNames = detected.map((item) => item.name);
      }
      console.log(detected);
      console.log("End detection");

      setImageURL(null);
      setCameraVisible(!cameraVisible);
      navigation.navigate(RootScreens.RESULT, { items: foodNames });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }

    // test
    // setImageURL(null);
    // setModalVisible(!modalVisible);
    // navigation.navigate(RootScreens.RESULT, {
    //   items: ["apple", "pork", "tomato", "butter", "potato"],
    // });
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

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cameraVisible}
      onRequestClose={() => {
        setCameraVisible(!cameraVisible);
      }}
    >
      <Modal visible={isLoading} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Spinner accessibilityLabel="Loading posts" />
          </View>
        </View>
      </Modal>
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
                  onPress={() => setCameraVisible(!cameraVisible)}
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

          <View style={[styles.controls]}>
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
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setCameraVisible(!cameraVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default CustomCamera;
