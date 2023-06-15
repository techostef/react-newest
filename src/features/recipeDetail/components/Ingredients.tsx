import { useMemo } from "react";

import { IRecipe } from "../../shared/types";

interface IProps {
  recipe: IRecipe
}

function Ingredients ({ recipe }: IProps) {

  const listIngredient = useMemo(() => {
    let start = 1;
    const result: string[] = [];
    while(start) {
      const ingredient = recipe[`strIngredient${start}`] ?? '';
      const measure = recipe[`strMeasure${start}`] ?? '';
      if (!ingredient || !measure) {
        break;
      }
      result.push(`${measure} ${ingredient}`)
      start ++;
    }

    return result;
  }, [recipe])

  return (
    <div>
      <h2>Ingredients</h2>
      {!!listIngredient.length && (
        <ul>
          {
            listIngredient.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default Ingredients;