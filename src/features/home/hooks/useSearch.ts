import { useState } from "react";
import axios from "axios";

import { IRecipe } from "../../shared/types";
import { toast } from "react-toastify";

const SEARCH_API = 'https://www.themealdb.com/api/json/v1/1/search.php';

export function useSearch () {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function handleSearch (search: string) {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(SEARCH_API, {
        params: {
          s: search
        }
      });
      setRecipes(result.data.meals ?? []);
    } catch (err) {
      console.log('err', err);
      toast('Failed to search recipe by name, please try again', {
        type: 'error'
      })
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onSearch: handleSearch,
    recipes,
    isLoading,
    isError
  }
}