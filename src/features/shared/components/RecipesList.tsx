import { css } from '@emotion/css';
import { IFavorite } from '../types';
import RecipeCard from './RecipeCard';

interface IProps {
  recipes: IFavorite[];
}

function RecipesList ({ recipes }: IProps) {
  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} item={recipe}/>
      ))}
    </div>
  )
}

const styles = {
  container: css({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
  })
}

export default RecipesList