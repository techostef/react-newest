import { useEffect, useState } from "react";
import axios from "axios";

import { IRecipe } from "../../shared/types";
import { toast } from "react-toastify";

const SEARCH_LETTER = 'b';
const FIRST_LETTER_API = 'https://www.themealdb.com/api/json/v1/1/search.php';

export function useFirstLetter () {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getRecipeByFirstletter () {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(FIRST_LETTER_API, {
        params: {
          f: SEARCH_LETTER
        }
      });
      if (result.data?.meals.length) {
        setRecipes(result.data.meals);
      }
    } catch (err) {
      console.log('err', err);
      toast('Failed to get recipe by first letter, please try again', {
        type: 'error'
      })
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getRecipeByFirstletter,
    recipes,
    isLoading,
    isError
  }
}