"use client"
import RecipeCard from "@/components/RecipeCard";
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
    <div className="m-auto p-4">
      <h3 className="text-4xl text-center font-semibold">Welcome {user!.name}</h3>
      <p className="font-semibold text-2xl">Favourie category: <span className="font-bold">{user!.category!.toUpperCase()}</span></p>
      <p>Favourie recipes: {user!.recipes.length}</p>
      <div className="bg-black text-white p-4 rounded-2xl">
        {recipe &&
          <RecipeCard {...recipe} />
        }
      </div>
    </div>
  );
}
