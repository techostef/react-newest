import { useParams } from "react-router-dom";
import { useRecipeDetail } from "../features/recipeDetail/hooks/useRecipeDetail";
import { useEffect } from "react";
import { css } from "@emotion/css";
import Loader from "../features/shared/components/Loader";
import Header from "../features/recipeDetail/components/Header";
import Ingredients from "../features/recipeDetail/components/Ingredients";
import Instructions from "../features/recipeDetail/components/Instructions";
import { useMountedCount } from "../features/shared/hooks/useMountedCount";
import CommentForm from "../features/recipeDetail/components/CommentForm";
import MainLayouts from "../features/shared/layouts/MainLayouts";

function RecipeDetail () {
  const { id } = useParams();
  const { recipe, isLoading, getRecipeDetail } = useRecipeDetail();
  const mountedCount = useMountedCount();
  
  useEffect(() => {
    if (id && mountedCount() === 1) {
      getRecipeDetail(id);
    }
  }, [mountedCount])

  return (
    <MainLayouts>
      <div className={styles.container}>
        {isLoading && (
          <Loader />
        )}
        {recipe && (
          <>
            <Header recipe={recipe} />
            <Ingredients recipe={recipe} />
            <Instructions recipe={recipe} />
            <CommentForm />
          </>
        )}
        {!isLoading && !recipe && (
          <div>
            Data recipe is empty
          </div>
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

export default RecipeDetail;