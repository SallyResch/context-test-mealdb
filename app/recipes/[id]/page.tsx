import LikeButton from "@/components/LikeButton";
import { RecipesDetail } from "@/types/recipeDetails";

const Recipe = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    let recipe: RecipesDetail | undefined;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
        const data = await response.json()

        recipe = data.meals[0]
        console.log(recipe)
        const ingredients: string[] = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe![`strIngredient${i}` as keyof RecipesDetail];
            const measure = recipe![`strMeasure${i}` as keyof RecipesDetail];

            if (ingredient) {
                ingredients.push(`${ingredient} - ${measure}`);
            }
        }
        recipe!.ingredients = ingredients
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            {recipe &&
                <div className="flex flex-col items-center max-w-md m-auto">
                    <div className="flex flex-row">
                        <h2 className="text-4xl font-semibold">{recipe.strMeal}</h2>
                        <LikeButton idMeal={recipe.idMeal} strMeal={recipe.strMeal} strMealThumb={recipe.strMealThumb} />
                    </div>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} width={300} className="rounded border border-amber-500" />
                    <p>Category: {recipe.strCategory}</p>
                    <p>Country: {recipe.strCountry}</p>
                    <p>Instructions: {recipe.strInstructions}</p>
                    <div>
                        <h3>Ingredients</h3>
                        <div className=" max-w-md">
                            {recipe.ingredients}
                        </div>
                    </div>
                </div>}
        </div>

    )
}

export default Recipe