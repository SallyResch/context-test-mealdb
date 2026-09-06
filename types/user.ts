import { RecipesType } from "./recipes"

export type UserType={
    name: string,
    password: string
    category:string | null
    recipes:RecipesType[]
}

