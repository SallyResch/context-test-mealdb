"use client"
import { useUserContext } from "@/contexts/userContext"
import { UserContextType } from "@/types/context"
import { ReactNode } from "react"
import Login from "./Login"
import Navigation from "./Navigation"

const LoginWrapper = ({children}: {children:ReactNode}) => {
    const {user} = useUserContext() as UserContextType
  return (
    <>
    {user ?
    <> 
    <Navigation/>
    {children}</> : <Login/>}
    </>
  )
}

export default LoginWrapper