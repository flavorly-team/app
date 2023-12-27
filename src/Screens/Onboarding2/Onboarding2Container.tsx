import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens } from "..";
import { Onboarding2 } from "./Onboarding2";
import { RootStackParamList } from "@/Navigation";

type Onboarding2ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARDING2
>;

export const Onboarding2Container = ({
  navigation,
}: Onboarding2ScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Onboarding2 onNavigate={onNavigate}/>;
};