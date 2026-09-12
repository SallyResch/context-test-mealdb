"use client"
import LikeCategoryButton from "@/components/LikeCategoryButton"
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
    <div className="flex flex-1 flex-col w-full max-w-7xl mx-auto p-4">
      <h2 className="font-semibold text-4xl text-center">Meal Categories</h2>
      <div className="grid grid-cols-2 row-auto">
        {categories.map((category) => (
          <div key={category.idCategory} className="max-w-md m-2 border-fuchsia-950 border-2 rounded-2xl p-4">
            <div className="flex justify-between">
              <Link href={`/categories/${category.strCategory}`}>
                <h5 className="text-2xl font-semibold">{category.strCategory}</h5>
              </Link>
              <LikeCategoryButton strCategory={category.strCategory} />
            </div>
            <img className="w-full max-w[200px] h-auto mx-auto mt-4 rounded-2xl" src={category.strCategoryThumb} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage