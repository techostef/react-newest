import { IOption, IRecipe } from "../../shared/types";

export function recipesToOptions (recipes: IRecipe[]): IOption[] {
  return recipes.map((item) => ({
    label: item.strMeal,
    value: item.idMeal,
  }))
}