import { css, cx } from '@emotion/css';

import { useFirstLetter } from '../hooks/useFirsLetter';
import RecipesList from '../../shared/components/RecipesList';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { IRecipe } from '../../shared/types';
import { useMountedCount } from '../../shared/hooks/useMountedCount';

function FirstLetterSection () {
  const mountedCount = useMountedCount();
  const { recipes, getRecipeByFirstletter } = useFirstLetter();

  const [showRecipes, setShowRecipes] = useState<IRecipe[]>([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');

  function handleFilter () {
    const nameLowerCase = name.toLocaleLowerCase();
    const categoryLowerCase = category.toLocaleLowerCase();
    const areaLowerCase = area.toLocaleLowerCase();
    const filterByName = recipes.filter((item) => item.strMeal.toLowerCase().indexOf(nameLowerCase) >= 0)
    const filterByCategory = filterByName.filter((item) => item.strCategory.toLowerCase().indexOf(categoryLowerCase) >= 0)
    const filterByArea = filterByCategory.filter((item) => item.strArea.toLowerCase().indexOf(areaLowerCase) >= 0)
    setShowRecipes(filterByArea);
  }
  
  useEffect(() => {
    if (mountedCount() === 1) {
      getRecipeByFirstletter();
    }
  }, [mountedCount])

  useEffect(() => {
    handleFilter()
  }, [name, category, area, recipes])

  return (
    <div className={styles.container}>
      <h2>Recipe By First Letter B</h2>
      <div className={cx(styles.filterInputs, 'flex-column-mobile', 'flex-column-tablet')}>
        <TextField className={'w-full-mobile'} label={'Filter By Name'} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField className={'w-full-mobile'} label={'Filter By Category'} value={category} onChange={(e) => setCategory(e.target.value)} />
        <TextField className={'w-full-mobile'} label={'Filter By Area'} value={area} onChange={(e) => setArea(e.target.value)} />
      </div>
      <RecipesList recipes={showRecipes} />
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }),
  filterInputs: css({
    display: 'flex',
    gap: 8,
  })
}

export default FirstLetterSection;