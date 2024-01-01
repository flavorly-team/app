import { RootScreens } from "..";
import { Settings } from "./Settings";

export const SettingsContainer = ({ navigation }) => {
  const onNavigate = (screen: RootScreens, params: { params: string }) => {
    navigation.navigate(screen, params);
  };
  return <Settings onNavigate={onNavigate} />;
};
