import { RootScreens } from "..";
import { settings } from "../../data/settings";
import { DefaultSettings } from "./DefaultSettings";

export const DefaultSettingsContainer = ({ route, navigation }) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const { settingName } = route.params;

  return (
    <DefaultSettings
      onNavigate={onNavigate}
      setting={settings[settingName]}
      goBack={goBack}
    />
  );
};
