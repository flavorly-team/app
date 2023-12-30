import Ionicons from "@expo/vector-icons/Ionicons";

type IconName = keyof (typeof Ionicons)["glyphMap"];

type Props = {
  name: IconName;
  size: number;
  color: string;
};

export const Icon: React.FC<Props> = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};
