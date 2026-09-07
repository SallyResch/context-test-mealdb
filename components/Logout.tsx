"use client"
import { useUserContext } from "@/contexts/userContext"
import { users } from "@/data/users"
import { UserContextType } from "@/types/context"
import { LogOutIcon } from "lucide-react"
import Link from "next/link"

const Logout = () => {
    const { setUser } = useUserContext() as UserContextType

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <Link href={"/"} onClick={handleLogout} className="flex justify-center items-center text-fuchsia-950 hover:cursor-pointer hover:bg-amber-300 rounded hover:shadow-2xl">
            <p className="mr-2 ml-2">| Logout</p>
            <LogOutIcon />
        </Link>
    )
}

export default Logout