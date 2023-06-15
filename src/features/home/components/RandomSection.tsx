import React, { useEffect } from "react";
import RecipesList from "../../shared/components/RecipesList";
import { useRandomRecipe } from "../hooks/useRandomRecipe"
import { useMountedCount } from "../../shared/hooks/useMountedCount";


function RandomSection () {
  const { recipe, getRandom, isError } = useRandomRecipe();
  
  const mountedCount = useMountedCount();

  useEffect(() => {
    if (mountedCount() === 1) {
      getRandom();
    }
  }, [mountedCount])

  return (
    <div>
      <h2>Random Recipe</h2>
      {!isError && <RecipesList recipes={recipe ? [recipe] : []}/>}
      {isError && <div>Failed to get random recipe</div>}
    </div>
  )
}

export default RandomSection