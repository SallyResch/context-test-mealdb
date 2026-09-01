
import { UserContextType } from "@/types/context"
import { UserType } from "@/types/user"
import { createContext, useContext, useState } from "react"

const UserContext = createContext<UserContextType|null>(null)

export const UserProvider =()=>{
    const [user,setUser] = useState<UserType|null>(null)
    return<UserContext.Provider value={{user,setUser}}></UserContext.Provider>
}