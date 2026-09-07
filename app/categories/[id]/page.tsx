import RecipeCard from "@/components/RecipeCard"
import { CategoryMeals } from "@/types/category"

const Category = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${id}`)
        const data: CategoryMeals = await response.json()
        return (
            <div className="grid grid-cols-2 m-auto">
                {data.meals.map((meal, index) => (
                    <div key={index} className="bg-black text-white p-4 rounded-2xl m-auto">
                        <RecipeCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
                    </div>
                ))}
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}
export default Category