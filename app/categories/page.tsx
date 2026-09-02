"use client"
import { CategoriesResponse, CategoryType } from "@/types/category"
import Link from "next/link"
import { useEffect, useState } from "react"

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`)
      const data: CategoriesResponse = await response.json()
      if (data) {
        setCategories(data.categories)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // the extra ! means that it definetly exists
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <div>
      <h2 className="font-semibold text-4xl text-center">Meal Categories</h2>
      {categories.map((category) => (
        <div key={category.idCategory} className="max-w-md m-auto">
          <Link href={`/categories/${category.strCategory.toLocaleLowerCase}`}>
            <h5 className="text-2xl font-semibold">{category.strCategory}</h5>
          </Link>
          <img className="text-2xl" src={category.strCategoryThumb} />
          <h5 className="text-2xl">{category.strCategoryDescription}</h5>
        </div>
      ))}
    </div>
  )
}

export default CategoriesPage