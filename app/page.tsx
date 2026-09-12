"use client"
import RecipeCard from "@/components/RecipeCard";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/context";
import { RecipesType } from "@/types/recipes";
import Link from "next/link";
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
    <div className="min-h-screen bg-[url('/cozycorner.webp')] bg-cover bg-bottom text-white">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="m-auto text-center">
          <h3 className="text-4xl text-center font-semibold">Welcome {user!.name}</h3>
          <div>
            <div className="text-xl sm:text-2xl font-semibold">
              <p>Favourie category:{" "}</p>
              <Link href={`/categories/${user!.category}`} className="font-semibold">{user!.category?.toUpperCase()}</Link>
            </div>
            <p>Favourie recipes: {user!.recipes.length}</p>
          </div>
        </div>
        <div className="mt-6 text-white p-4 sm:p-6 rounded-2xl w-full overflow-hidden">
          {recipe &&
            <RecipeCard {...recipe} />
          }
        </div>
      </div>
    </div>
  );
}
