import { LocalizationKey, i18n } from "@/Localization";
import { ImageSourcePropType } from "react-native";

export type OnboardingItemType = {
  id: number;
  title: string;
  description: string;
  illustrator: ImageSourcePropType;
  backgroundColor: string;
  indicatorColor: string;
};

export type WelcomeItemType = {
  id: number;
  slogan: string;
  backgroundColor: string;
  illustrator: ImageSourcePropType;
  backgroundImageColor: string;
};

export default [
  {
    id: 0,
    slogan: "Good Food\nGreat Vibes!",
    illustrator: require("../../../assets/images/flavorly.png"),
    backgroundImageColor: "#FFD7C0",
    backgroundColor: "#FFF",
  },
  {
    id: 1,
    title: i18n.t(LocalizationKey.ON1_QUOTE),
    description: i18n.t(LocalizationKey.ON1_SUBQUOTE),
    illustrator: require("../../../assets/images/scan.png"),
    backgroundColor: "#DF7861",
    indicatorColor: "#E64723",
  },
  {
    id: 2,
    title: i18n.t(LocalizationKey.ON2_QUOTE),
    description:
      i18n.t(LocalizationKey.ON2_SUBQUOTE),
    illustrator: require("../../../assets/images/recommend.png"),
    backgroundColor: "#ECB390",
    indicatorColor: "#E77B39",
  },
  {
    id: 3,
    title: i18n.t(LocalizationKey.ON3_QUOTE),
    description: i18n.t(LocalizationKey.ON3_SUBQUOTE),
    illustrator: require("../../../assets/images/cook.png"),
    backgroundColor: "#94B49F",
    indicatorColor: "#4E785C",
  },
];
