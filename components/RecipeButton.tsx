import { RecipesType } from "@/types/recipes"
import { Heart } from "lucide-react"


const RecipeButton  = async ({idMeal,strMeal,strMealThumb}: RecipesType) => {
  return (
    <div>
      <Heart size={32}/>
    </div>
  )
}

export default RecipeButton