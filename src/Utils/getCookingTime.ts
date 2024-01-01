import recipeList from "@/data/recipe"

export const getCookingTime = (id: string) => {
    return recipeList.filter((item) => item.id === id)[0].subtitle.time
}