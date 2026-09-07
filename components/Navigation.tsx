"use client"
import Link from "next/link"
import Logout from "./Logout"
import { MenuIcon } from "lucide-react"

const Navigation = () => {
  return (
    <div>
      <MenuIcon />
      <div className="bg-amber-500 font-semibold p-2 hidden md:block">
        <div className="flex flex-row justify-evenly m-auto">
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/"}>Home</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/about"}>About</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/categories"}>Categories</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/profile"}>Profile</Link>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default Navigation