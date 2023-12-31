import { Box } from "native-base";
import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import { Icon } from "./Icon";

type Props = {
  name: string;
  image: any;
  onPress: any;
};

export const SearchItem: React.FC<Props> = ({
  name,
  image,
  onPress,
}) => {
  return (
    <Box mt={1} ml={1} mr={1} mb={1} style={styles.container}>
      <Pressable onPress={onPress} style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.col}>
          <View style={styles.row1}>
            <Text style={styles.row2Text}>{name}</Text>
          </View>
        </View>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#E0E0E0",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  image: {
    width: "30%",
    height: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  col: {
    flexGrow: 1,
  },
  row1: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  row2Text: {
    fontFamily: "Bold",
    fontSize: 20,
  }
});
