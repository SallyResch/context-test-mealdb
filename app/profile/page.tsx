"use client"
import { useUserContext } from "@/contexts/userContext"
import { UserContextType } from "@/types/context"
import Link from "next/link"

type Props = {}

const ProfilePage = (props: Props) => {
  const { user } = useUserContext() as UserContextType
  return (
    <div className="mx-auto mt-4">
      <h2 className="text-4xl m-2">Welcome {user?.name}</h2>
      <p className="p-2 shadow-2xl rounded border border-fuchsia-950">Favourite Category: {user?.category?.toLocaleUpperCase()}</p>
      <div className="p-2 shadow-2xl rounded border border-fuchsia-950 mt-2">
        <h3 className="text-2xl">Liked recipes</h3>
        <p>Go to a specific recipe to see instructions and ingredients</p>
        <div className="flex flex-col mt-4">
          {user?.recipes.map((recipe) => (
            <div className="mt-5">
              <Link className="hover:cursor-pointer border-b-2 border-fuchsia-300" href={`/recipes/${recipe.idMeal}`} key={recipe.idMeal}>{recipe.strMeal}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage