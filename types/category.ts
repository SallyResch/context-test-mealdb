export type CategoryType ={
    idCategory: string,
    strCategory:string,
    strCategoryThumb:string
    strCategoryDescription:string,
}

export type CategoriesResponse={
    categories: CategoryType[];
}

export type CategoryMeal ={
    strMeal: string,
    strMealThumb:string,
    idMeal: string,
    strArea: string |null,
    strCountry: string
}

export type CategoryMeals = {
    meals: CategoryMeal[]
}