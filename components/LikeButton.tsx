"use client"
import { useUserContext } from "@/contexts/userContext"
import { UserContextType } from "@/types/context"
import { RecipesType } from "@/types/recipes"
import { Heart } from "lucide-react"


const RecipeButton = ({idMeal,strMeal,strMealThumb}: RecipesType) => {
  const {user,setUser} = useUserContext()as UserContextType

  const handleLikeClick = ()=>{
    const recipe:RecipesType = {idMeal,strMeal,strMealThumb}
    const favourieRecipe = user!.recipes.find(recipe => recipe.idMeal === idMeal) ? true : false
    console.log(favourieRecipe)
    if(favourieRecipe){
      setUser({...user!, recipes: user!.recipes.filter(savedRecipe => savedRecipe.idMeal !== recipe.idMeal)})
    console.log(user)
    }else{
      setUser({...user!, recipes:[...user!.recipes,recipe]})
      console.log(user)
    }
  }
  return (
    <div>
      {user && user.recipes.find(recipe => recipe.idMeal === idMeal)? "Saved" : "Save"}
      <Heart onClick={handleLikeClick} className="text-amber-500" size={32}/>
    </div>
  )
}

export default RecipeButton