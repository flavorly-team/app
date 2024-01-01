import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootScreens } from "@/Screens";
import { useFavorite } from "@/Hooks/useFavorite";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addFavorite, removeFavorite } from "@/Utils/setFavorite";
import { checkFavorite } from "@/Utils/checkFavorite";

const Pin = (props) => {
  const { id, image, title } = props.pin;

  const [ratio, setRatio] = useState(1);
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(checkFavorite(id, props.favorites));

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const onLike = async () => {
    if (isLiked) {
      removeFavorite(id)
      setIsLiked(false)
    }
    else {
      addFavorite(id, image, title)
      setIsLiked(true)
    }
  };

  const goToPinPage = () => {
    navigation.navigate(RootScreens.PIN, { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Pressable onPress={onLike} style={isLiked ? [styles.heartBtn, {backgroundColor: "#DF7861"}] : styles.heartBtn}>
          <AntDesign name="hearto" size={16} color={isLiked ? "white" : "black"} />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Pin;
