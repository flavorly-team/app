import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Favorite } from "./Favorite";
import { RootStackParamList } from "@/Navigation";

// type FavoriteScreenNavigatorProps = NativeStackScreenProps<
//   RootStackParamList,
//   RootScreens.FAVORITE
// >;

export const FavoriteContainer = ({
  navigation,
}) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Favorite onNavigate={onNavigate}/>;
};
