import { Pressable, View, Text, StyleSheet } from "react-native";
import { Icon } from "./Icon";

type Props = {
  name: string;
  iconName: any;
  color: string;
  bgColor: string;
  onPress: any;
};

export const Button: React.FC<Props> = ({
  name,
  iconName,
  color,
  bgColor,
  onPress,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: `${bgColor}`}]}>
      <Pressable>
        <View style={styles.btn}>
          <Text style={[styles.btnText, {color: `${color}`}]}>{name}</Text>
          <Icon name={iconName} size={30} color={color} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Regular",
  },
});
