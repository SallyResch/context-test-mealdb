import LikeCategoryButton from "@/components/LikeCategoryButton"
import RecipeCard from "@/components/RecipeCard"
import { CategoryMeals } from "@/types/category"

const Category = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${id}`)
        const data: CategoryMeals = await response.json()
        return (
            <div className="m-auto">
                <div className="flex flex-row justify-center items-center">
                    <h2 className="text-center text-3xl font-semibold mr-5">Category: {id}</h2>
                    <LikeCategoryButton strCategory={id} />
                </div>
                <div className="md:grid grid-cols-2 row-auto m-auto">
                    {data.meals.map((meal, index) => (
                        <div key={index} className="text-fuchsia-950 p-4 rounded-2xl m-auto">
                            <RecipeCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
                        </div>
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}
export default Category