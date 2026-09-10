"use client"
import { useUserContext } from '@/contexts/userContext'
import { UserContextType } from '@/types/context'
import { Heart } from 'lucide-react'

const LikeCategoryButton = ({ strCategory }: { strCategory: string }) => {
  const { user, setUser } = useUserContext() as UserContextType
  const isLiked = user?.category?.toLowerCase() === strCategory.toLowerCase()
  const handleClick = () => {
    if (!user) return
    if (user && user.category === strCategory) {
      setUser({ ...user, category: "" })
    } else {
      setUser({ ...user, category: strCategory })
    }
  }
  return (
    <div>
      <Heart fill={isLiked ? 'red' : "none"} className="text-red-600 hover:cursor-pointer" onClick={handleClick} />
    </div>
  )
}

export default LikeCategoryButton