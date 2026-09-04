import RecipeCard from "@/components/RecipeCard"
import { CategoryMeals } from "@/types/category"

const Category = async ({ params }:{params:Promise<{id:string}>}) => {
    const { id } = await params

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${id}`)
        const data:CategoryMeals = await response.json()
        return (
            <div>
        {data.meals.map((meal,index) =>(
            <RecipeCard key={index} idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb}/>
        ))}
        </div>
    )
    } catch (error) {
        console.log(error)
    }   
}
export default Category