import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Onboarding1 } from "./Onboarding1";
import { RootStackParamList } from "@/Navigation";

type Onboarding1ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARDING1
>;

export const Onboarding1Container = ({
  navigation,
}: Onboarding1ScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Onboarding1 onNavigate={onNavigate}/>;
};