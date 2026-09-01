"use client"
import { useUserContext } from "@/contexts/userContext"
import { users } from "@/data/users"
import { UserContextType } from "@/types/context"
import { SetStateAction, useState } from "react"

const Login = () => {
  //as = alias
  const {setUser} = useUserContext() as UserContextType
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleUsername =(e: { target: { value: SetStateAction<string> } })=>{
        setUsername(e.target.value)
    }

    const handlePassword =(e: { target: { value: SetStateAction<string> } })=>{
    setPassword(e.target.value)
    }

    const handleLogin=(e: { preventDefault: () => void })=> {
        e.preventDefault()
        const loggedInUser = users.find(item => item.name === username && item.password === password)
        if(loggedInUser)setUser(loggedInUser)
          //add check
    }

  return (
    <form className="flex flex-col items-center bg-fuchsia-950 border-amber-500 m-auto p-4 rounded">
        <div className="flex flex-col text-white m-1">
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        id="username" 
        placeholder="enter username..." 
        className="border border-amber-500 p-2 rounded"
        onChange={handleUsername}
        value={username}
        />
        </div>
        <div className="flex flex-col text-white m-1">
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        id="password"
        placeholder="enter password..." 
        className="border border-amber-500 p-2 rounded"
        onChange={handlePassword}
        value={password}
          />
        </div>
        <button onClick={handleLogin} className="bg-amber-500 px-2 py-1 mt-2 rounded text-fuchsia-950">Login</button>
    </form>
  )
}

export default Login