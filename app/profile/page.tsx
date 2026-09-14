"use client"
import { useUserContext } from "@/contexts/userContext"
import { UserContextType } from "@/types/context"
import Link from "next/link"

type Props = {}

const ProfilePage = (props: Props) => {
  const { user } = useUserContext() as UserContextType
  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(135deg,_#fde68a_0px,_#fde68a_20px,_#f5d0fe_20px,_#f5d0fe_40px)] text-center">
      <div className="mt-10 m-auto bg-amber-200 md:w-[300px] shadow-2xl p-5">
        <h2 className="text-4xl mb-5">Welcome {user?.name}</h2>
        <p className="p-2 shadow-2xl rounded border border-fuchsia-950">Favourite Category: {user?.category?.toLocaleUpperCase()}</p>
        <div className="p-2 shadow-2xl rounded border border-fuchsia-950 mt-2">
          <h3 className="text-2xl">Liked recipes</h3>
          <p>Go to a specific recipe to see instructions and ingredients</p>
          <div className="flex flex-col mt-4">
            {user?.recipes.map((recipe) => (
              <div className="mt-5" key={recipe.idMeal}>
                <Link className="hover:cursor-pointer border-b-2 border-fuchsia-300" href={`/recipes/${recipe.idMeal}`} >{recipe.strMeal}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage