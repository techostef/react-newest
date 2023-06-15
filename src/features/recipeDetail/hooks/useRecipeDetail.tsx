import { useState } from "react";
import axios from "axios";

import { IRecipe } from "../../shared/types";
import { toast } from "react-toastify";

const RECIPE_DETAIL_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php';

export function useRecipeDetail() {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getRecipeDetail (idMeal: string) {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(RECIPE_DETAIL_API, {
        params: {
          i: idMeal
        }
      });
      if (result.data?.meals.length) {
        setRecipe(result.data.meals[0]);
      }
    } catch (err) {
      console.log('err', err);
      toast('Failed to get recipe by id, please try again', {
        type: 'error'
      })
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getRecipeDetail,
    recipe,
    isLoading,
    isError
  }
}