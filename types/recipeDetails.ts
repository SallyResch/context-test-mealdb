import { RecipesType } from "./recipes";

export type RecipesDetail = RecipesType & {
    strCountry: string,
    strInstructions:string,
    strCategory:string,
    ingredients:string[]
}