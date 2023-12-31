import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Result } from "./Result";
import { RootStackParamList } from "@/Navigation";

type ResultScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.RESULT
>;

export const ResultContainer = ({
  route, navigation
}: ResultScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens, params) => {
    navigation.navigate(screen, params);
  };

  const goBack = () => {
    navigation.goBack()
  }

  return <Result onNavigate={onNavigate} goBack={goBack} route = {route}/>;
};