import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { css } from "@emotion/css";
import Loader from "../features/shared/components/Loader";
import { useMountedCount } from "../features/shared/hooks/useMountedCount";
import RecipesList from "../features/shared/components/RecipesList";
import { useAreaRecipe } from "../features/area/hooks/useAreaRecipe";
import MainLayouts from "../features/shared/layouts/MainLayouts";

function Area () {
  const { area } = useParams();
  const { recipes, isLoading, getRecipeByArea } = useAreaRecipe();
  const mountedCount = useMountedCount();
  
  useEffect(() => {
    if (area && mountedCount() === 1) {
      getRecipeByArea(area);
    }
  }, [mountedCount])

  return (
    <MainLayouts>
      <div className={styles.container}>
        {isLoading && (
          <Loader />
        )}
        {!isLoading && (
          <>
            <h1>{area}</h1>
            {
              !!recipes.length && (
                <RecipesList recipes={recipes} />
              )
            }
          </>
        )}
      </div>
    </MainLayouts>
  )
}

const styles = {
  container: css({
    height: '100%',
    padding: 16,
  })
}

export default Area;