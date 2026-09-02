"use client"
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/context";
import { RecipesType } from "@/types/recipes";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipe, setRecipe] = useState<RecipesType | null>(null)

  const { user } = useUserContext() as UserContextType

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`)
      const data = await response.json()
      if (data) {
        setRecipe(data.meals[0])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCategoryMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.category}`)
      const data = await response.json()
      if (data) {
        setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)])
      }
    } catch (error) {
      console.log(error)
    }
  }



  // the extra ! means that it definetly exists
  useEffect(() => {
    if (!user!.category) {
      fetchRandomMeal()
    }
    fetchCategoryMeal()
  }, [])


  return (
    <div>
      <h3>Welcome Home {user?.name}</h3>
      <p>Your favourie category is: {user?.category}</p>
      {recipe &&
        <div key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} width={320} />
        </div>}
    </div>
  );
}
