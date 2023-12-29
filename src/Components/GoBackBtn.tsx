import { Icon } from "@/Components/Icon";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  color: string;
  onPress: any;
};
export const GoBackBtn: React.FC<Props> = ({ color, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Icon name="chevron-back-circle-outline" size={30} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
