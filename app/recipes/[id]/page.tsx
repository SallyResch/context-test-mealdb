import { RecipesDetail } from "@/types/recipeDetails";


const Recipe = async({params}:{params:{id:string}}) => {
    const {id} = await params
    let recipe:RecipesDetail | undefined;
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
            const data = await response.json()
            recipe = data.meals[0]
            const keys = Object.keys(recipe!).filter(key => key.includes("strIngredient"))
            const keysValue = keys.filter((key:string) => recipe[key] !== "" && recipe[key] !== null)
            const ingredients = keysValue.map((key, index) => `${recipe[key]} - ${recipe[`strMeasure${index + 1}`]}`)
            recipe.ingredients = ingredients;
        } catch (error) {
            console.log(error)
        }

    return (
        <div>
            {recipe && <div>
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt={recipe.strMeal}  width={300}/>
                <p>Category: {recipe.strCategory}</p>
                <p>Country: {recipe.strCountry}</p>
                <p>Instructions: {recipe.strInstructions}</p>
                <div>
                    <h3>Ingredients</h3>
                    {recipe.ingredients}
                </div>
                
            </div>}
        </div>
        
    )
}

export default Recipe