import { useState } from "react";
import axios from "axios";

import { IRecipe } from "../../shared/types";
import { toast } from "react-toastify";

const CATEGORY_API = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export function useCategoryRecipe () {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getRecipeByCategory (category: string) {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(CATEGORY_API, {
        params: {
          c: category
        }
      });
      if (result.data?.meals.length) {
        setRecipes(result.data.meals);
      }
    } catch (err) {
      console.log('err', err);
      toast('Failed to get recipe by category, please try again', {
        type: 'error'
      })
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getRecipeByCategory,
    recipes,
    isLoading,
    isError
  }
}