import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useFavorite = (id: string) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const f = async () => {
      const store = await AsyncStorage.getItem("@favorites");
      if (store === null) {
        setIsLiked(false);
      } else {
        const favoriteIds = JSON.parse(store).map((item) => item.id);
        if (favoriteIds.includes(id)) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      }
    };
    f();
  }, []);
  return isLiked;
};
