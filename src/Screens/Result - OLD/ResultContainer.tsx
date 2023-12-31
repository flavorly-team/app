import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Result } from "./Result";
import { RootStackParamList } from "@/Navigation";

type ResultScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.RESULT
>;

export const ResultContainer = ({
  navigation,
}: ResultScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  const goBack = () => {
    navigation.goBack()
  }

  return <Result onNavigate={onNavigate} goBack={goBack}/>;
};