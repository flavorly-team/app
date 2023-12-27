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
    title: "Nhận diện dễ dàng",
    description: "Nhập nhanh tất cả nguyên liệu\nchỉ trong vài giây",
    illustrator: require("../../../assets/images/scan.png"),
    backgroundColor: "#DF7861",
    indicatorColor: "#E64723",
  },
  {
    id: 2,
    title: "Đề xuất đa dạng",
    description:
      "Nhanh chóng - dinh dưỡng - tiện lợi\nBạn cần gì, Flavorly đều có hết",
    illustrator: require("../../../assets/images/recommend.png"),
    backgroundColor: "#ECB390",
    indicatorColor: "#E77B39",
  },
  {
    id: 3,
    title: "Cùng Flavorly nấu thôi!",
    description: "Chọn công thức bạn yêu thích nhất\nFlavorly đã sẵn sàng!",
    illustrator: require("../../../assets/images/cook.png"),
    backgroundColor: "#94B49F",
    indicatorColor: "#4E785C",
  },
];
