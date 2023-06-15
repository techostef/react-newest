import { useEffect, useState } from "react"
import Cookies from 'universal-cookie';
 
import { IFavorite, IRecipe } from "../types"
import { getNextYear } from "../utils";

const cookies = new Cookies();

export function useFavorite () {
  const [listFavorite, setListFavorite] = useState<IFavorite[]>([]);

  useEffect(() => {
    const oldFavorite = cookies.get('favorite');
    if (oldFavorite) {
      setListFavorite(oldFavorite);
    }
  }, [])

  function recipeToFavorite(recipe: IRecipe): IFavorite {
    const { idMeal, strMeal, strArea, strCategory, strMealThumb } = recipe;
    return {
      idMeal, 
      strMeal, 
      strArea, 
      strCategory, 
      strMealThumb 
    }
  }

  function handleFavorite (recipe: IRecipe) {
    const newFavorite = [...listFavorite.map((item) => ({...item}))];
    const index = newFavorite.findIndex((item) => item.idMeal === recipe.idMeal);
    if (index >= 0) {
      newFavorite.splice(index, 1);
    } else {
      newFavorite.push(recipeToFavorite(recipe));
    }

    setListFavorite(newFavorite);
    cookies.set(`favorite`, JSON.stringify(newFavorite), {
      expires: getNextYear()
    });
  }

  function isFavorite (recipe: IFavorite): boolean {
    return listFavorite.findIndex((item) => item.idMeal === recipe.idMeal) >= 0;
  }

  return {
    listFavorite,
    handleFavorite,
    isFavorite
  }
}