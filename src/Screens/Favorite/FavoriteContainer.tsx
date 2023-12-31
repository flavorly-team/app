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
  const onNavigate = (screen: RootScreens, params) => {
    navigation.navigate(screen, params);
  };

  return <Favorite onNavigate={onNavigate}/>;
};
