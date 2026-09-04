import { RecipesDetail } from "@/types/recipeDetails";


const Recipe = async({params}:{params:{id:string}}) => {
    const {id} = await params
    let recipe:RecipesDetail | undefined;
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
            const data = await response.json()
            recipe = data.meals[0]
            console.log(recipe)
        } catch (error) {
            console.log(error)
        }

    return (
        <div>
            <h2>{id}</h2>
            {recipe && recipe.strMeal}
        </div>
        
    )
}

export default Recipe