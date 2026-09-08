import { useUserContext } from '@/contexts/userContext'
import { UserContextType } from '@/types/context'
import { Heart } from 'lucide-react'

const LikeCategoryButton = ({strCategory}: {strCategory:string}) => {
      const {user, setUser} = useUserContext() as UserContextType

      const handleClick =()=>{
        if(user && user.category !== strCategory){
        setUser({...user, category:strCategory})
        }else if(user && user.category){
          setUser({...user, category:""})
        }
      }
      console.log(user!.category)
  return (
    <div>
        <Heart className="text-red-600 hover:cursor-pointer" onClick={handleClick}/>
    </div>
  )
}

export default LikeCategoryButton