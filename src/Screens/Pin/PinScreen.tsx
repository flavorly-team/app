import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type PinScreenScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PIN
>;

const PinScreen = ({ route, navigation }: PinScreenScreenNavigatorProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`PinScreen ${id}`}</Text>
      <Pressable onPress={goBack} style={[styles.backBtn]}>
        <Ionicons name={"chevron-back"} size={35} color={"black"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 10,
  },
});

export default PinScreen;
