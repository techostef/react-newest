import { css } from "@emotion/css";
import { IRecipe } from "../../shared/types";
import { useMemo } from "react";

interface IProps {
  recipe: IRecipe
}

function Instructions ({ recipe }: IProps) {
  const listInstructions = useMemo(() => {
    const result = recipe.strInstructions.replaceAll(' \r', '').replaceAll('\r', '').split('\n');
    return result.filter((item) => item)
  }, [recipe.strInstructions])


  return (
    <div className={styles.container}>
      <h2>Instructions</h2>
      {listInstructions.length ? (
        <ul>
          {
            listInstructions.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      ) : recipe.strInstructions}
    </div>
  )
}

const styles = {
  container: css({
    paddingBottom: 32
  })
}

export default Instructions;