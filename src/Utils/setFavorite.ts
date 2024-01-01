import AsyncStorage from "@react-native-async-storage/async-storage";

export const addFavorite = async (id: string, image: any, title: string) => {
  const store = await AsyncStorage.getItem("@favorites");
  if (store === null) {
    const favorites = [];
    const newFavorites = [
      ...favorites,
      {
        id: id,
        image: image,
        title: title,
      },
    ];
    await AsyncStorage.setItem("@favorites", JSON.stringify(newFavorites));
  } else {
    const favorites = JSON.parse(store);
    const newFavorites = [
      ...favorites,
      {
        id: id,
        image: image,
        title: title,
      },
    ];
    await AsyncStorage.setItem("@favorites", JSON.stringify(newFavorites));
  }
};

export const removeFavorite = async (id: string) => {
  const store = await AsyncStorage.getItem("@favorites");
  const favorites = JSON.parse(store);
  const newFavorites = favorites.filter((item) => item.id !== id);
  await AsyncStorage.setItem("@favorites", JSON.stringify(newFavorites));
};

export const clearFavorite = async () => {
  await AsyncStorage.removeItem("@favorites");
};
