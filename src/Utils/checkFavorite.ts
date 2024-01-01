export const checkFavorite = (id: string, favorites: any) => {
    return favorites.filter((item) => item.id === id).length > 0
}