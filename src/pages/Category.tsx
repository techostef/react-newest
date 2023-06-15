import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { css } from "@emotion/css";
import Loader from "../features/shared/components/Loader";
import { useMountedCount } from "../features/shared/hooks/useMountedCount";
import { useCategoryRecipe } from "../features/category/hooks/useCategoryRecipe";
import RecipesList from "../features/shared/components/RecipesList";
import MainLayouts from "../features/shared/layouts/MainLayouts";

function Category () {
  const { category } = useParams();
  const { recipes, isLoading, getRecipeByCategory } = useCategoryRecipe();
  const mountedCount = useMountedCount();
  
  useEffect(() => {
    if (category && mountedCount() === 1) {
      getRecipeByCategory(category);
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
            <h1>{category}</h1>
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

export default Category;