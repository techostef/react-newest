import { useState } from "react";
import axios from "axios";

import { IRecipe } from "../../shared/types";
import { toast } from "react-toastify";

const RANDOM_API = 'https://www.themealdb.com/api/json/v1/1/random.php';
const INTERVAL_RANDOM = 1_000 * 60 * 3; // 3 minutes

export function useRandomRecipe () {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getRandom () {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios.get(RANDOM_API);
      if (result.data?.meals.length) {
        setRecipe(result.data.meals[0]);
      }
    } catch (err) {
      console.log('err', err);
      toast('Failed to get random recipe, please try again', {
        type: 'error'
      })
      setIsError(true)
    } finally {
      setIsLoading(false);
      setTimeout(async () => {
        await getRandom()
      }, INTERVAL_RANDOM)
    }
  }

  return {
    getRandom,
    recipe,
    isLoading,
    isError
  }
}