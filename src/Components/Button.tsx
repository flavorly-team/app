import { Pressable, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "./Icon";
import { Text } from "native-base";

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
    <View style={[styles.container, { backgroundColor: `${bgColor}` }]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
          <Text fontFamily="Bold" fontSize="lg" style={{ color: `${color}` }}>
            {name}
          </Text>
          <Icon name={iconName} size={25} color={color} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
  },
});
