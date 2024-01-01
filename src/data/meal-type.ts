const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
const MealTypesRaw = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink"
]

export type CategoryData = {
    id: number;
    title: string;
};

export const MealTypes = MealTypesRaw.map((key, idx) => ({ id: idx, title: capitalizeWords(key) }))