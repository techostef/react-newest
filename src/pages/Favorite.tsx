import { css } from "@emotion/css";
import RecipesList from "../features/shared/components/RecipesList";
import MainLayouts from "../features/shared/layouts/MainLayouts";
import { useFavorite } from "../features/shared/hooks/useFavorite";

function Favorite () {
  const { listFavorite } = useFavorite();

  return (
    <MainLayouts>
      <div className={styles.container}>
        <h1>Favorite</h1>
        {!!listFavorite.length && (
          <RecipesList recipes={listFavorite} />
        )}
        {listFavorite.length === 0 && (
          <div>Your Favorite is empty</div>
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

export default Favorite;