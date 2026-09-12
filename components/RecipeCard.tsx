import { RecipesType } from "@/types/recipes"
import Link from "next/link"

const RecipeCard = ({ idMeal, strMeal, strMealThumb }: RecipesType) => {

  return (
    <Link href={`/recipes/${idMeal}`} key={idMeal} className="block w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-4 break-words">{strMeal}</h3>
      <img src={strMealThumb} className=" m-auto w-[50%] h-auto rounded-xl" />
    </Link>
  )
}

export default RecipeCard