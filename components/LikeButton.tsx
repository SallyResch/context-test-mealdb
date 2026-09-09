"use client"
import { useUserContext } from "@/contexts/userContext"
import { UserContextType } from "@/types/context"
import { RecipesType } from "@/types/recipes"
import { Heart } from "lucide-react"

const LikeButton = ({ idMeal, strMeal, strMealThumb }: RecipesType) => {
  const { user, setUser } = useUserContext() as UserContextType
  const isLiked = user?.recipes.some(recipe => recipe.idMeal === idMeal)
  const handleLikeClick = () => {
    const recipe: RecipesType = { idMeal, strMeal, strMealThumb }
    const favourieRecipe = user!.recipes.find(recipe => recipe.idMeal === idMeal) ? true : false

    if (favourieRecipe) {
      setUser({ ...user!, recipes: user!.recipes.filter(savedRecipe => savedRecipe.idMeal !== recipe.idMeal) })
      console.log(user?.recipes)
    } else {
      setUser({ ...user!, recipes: [...user!.recipes, recipe] })
      console.log(user?.recipes)
    }
  }
  return (
    <div className="flex items-center">
      <Heart fill={isLiked ? "orange" : "none"} onClick={handleLikeClick} className="text-amber-500" size={32} />
    </div>
  )
}

export default LikeButton