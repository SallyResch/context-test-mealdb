"use client"
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/context";
import { RecipesType } from "@/types/recipes";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipe, setRecipe] = useState<RecipesType | null>(null)
  const {user} = useUserContext() as UserContextType
  const fetchRandomMeal = async()=>{
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

  useEffect(()=>{
    fetchRandomMeal()
  },[])
  return (
    <div>
      <h3>Welcome Home {user?.name}</h3>
      {recipe && <h3>{recipe.strMeal}</h3>}
    </div>
  );
}
