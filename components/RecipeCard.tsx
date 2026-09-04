import { RecipesType } from "@/types/recipes"
import Link from "next/link"

const RecipeCard = ({idMeal,strMeal,strMealThumb}: RecipesType) => {

  return (
    <Link href={`/recipes/${idMeal}`} key={idMeal}>
        <h3>{strMeal}</h3>
        <img src={strMealThumb} width={300} />
    </Link>
  )
}

export default RecipeCard