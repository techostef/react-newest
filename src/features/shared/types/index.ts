type IDetailRecipe = Record<`strIngredient${number}`, string | null> & Record<`strMeasure${number}`, string | null>

export interface IRecipe extends Partial<IDetailRecipe> {
  idMeal: number;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}


export type IFavorite = Pick<IRecipe, 'idMeal' | 'strMeal' | 'strCategory' | 'strMealThumb' | 'strArea'>

export interface IOption {
  label: string;
  value: string | number;
}
