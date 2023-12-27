import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Start } from "./Start";
import { RootStackParamList } from "@/Navigation";

type StartScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.START
>;

export const StartContainer = ({
  navigation,
}: StartScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Start onNavigate={onNavigate}/>;
};