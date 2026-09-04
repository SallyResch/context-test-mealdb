import { RecipesDetail } from "@/types/recipeDetails";


const Recipe = async({params}:{params:{id:string}}) => {
    const {id} = await params
    let recipe:RecipesDetail | undefined;
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
            const data = await response.json()
            recipe = data.meals[0]
            console.log(recipe)
            const keys = Object.keys(recipe!).filter(key => key.includes("strIngredient"))
            console.log(keys)
            const keysValue = keys.filter((key:string) => recipe[key] !== "" && recipe[key] !== null)
            console.log(keysValue)
            const ingredients = keysValue.map((key, index) => `${recipe[key]} - ${recipe[`strMeasure${index + 1}`]}`)
            console.log(ingredients)
            recipe.ingredients = ingredients;
        } catch (error) {
            console.log(error)
        }

    return (
        <div>
            <h2>{id}</h2>
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