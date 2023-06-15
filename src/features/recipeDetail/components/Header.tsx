import { css, cx } from "@emotion/css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { IRecipe } from "../../shared/types";
import { useFavorite } from "../../shared/hooks/useFavorite";
import { Link } from "react-router-dom";
import { AREA_URL, CATEGORY_URL } from "../../shared/constants";

interface IProps {
  recipe: IRecipe
}

function Header ({ recipe }: IProps ) {
  const { handleFavorite, isFavorite } = useFavorite();
  return (
    <div className={cx(styles.container, 'flex-column-mobile', 'flex-column-tablet')}>
      <img src={recipe.strMealThumb} className={styles.img} />
      <div className={styles.content}>
        <span className={styles.title}>
          {recipe.strMeal}
        </span>
        <div className={styles.itemInfo}>
          <div className={styles.itemInfoLabel}>
            Favorite
          </div>
          <div className={styles.cursor} onClick={() => handleFavorite(recipe)}>
            {isFavorite(recipe) ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon /> }
          </div>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemInfoLabel}>
            Category
          </div>
          <span>
            : 
            <Link 
              to={`${CATEGORY_URL}/${recipe.strCategory}`} 
              style={{
                marginLeft: 4
              }}
            >
              {recipe.strCategory}
            </Link>
          </span>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemInfoLabel}>
            Area
          </div>
          <span>
            : 
            <Link 
              to={`${AREA_URL}/${recipe.strArea}`} 
              style={{
                marginLeft: 4
              }}
            >
              {recipe.strArea}
            </Link>
          </span>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemInfoLabel}>
            Tags
          </div>
          <span>
            : {recipe.strTags ?? '-'}
          </span>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemInfoLabel}>
            Youtube
          </div>
          <div>
            : {recipe.strYoutube ? <a href={recipe.strYoutube}>Link</a> : '-'}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    gap: 16
  }),
  title: css({
    fontWeight: 800,
    fontSize: 32,
    marginBottom: 8
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }),
  itemInfo: css({
    marginBottom: 8,
    display: 'flex',
  }),
  itemInfoLabel: css({
    width: 100,
  }),
  cursor: css({
    cursor: 'pointer'
  }),
  img: css({
    width: 400,
    maxWidth: '100%'
  })
}

export default Header;