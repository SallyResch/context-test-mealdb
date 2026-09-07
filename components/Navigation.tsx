"use client"
import Link from "next/link"
import Logout from "./Logout"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-amber-500">
      <div>
        <button onClick={handleMenu}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-row justify-evenly m-auto">
          <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/"}>Home</Link>
          <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/about"}>About</Link>
          <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/categories"}>Categories</Link>
          <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/profile"}>Profile</Link>
          <Logout />
        </div>
      )}
      <div className="bg-amber-500 font-semibold p-2 hidden md:block">
        <div className="flex flex-row justify-evenly m-auto">
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/"}>Home</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/about"}>About</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/categories"}>Categories</Link>
          <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/profile"}>Profile</Link>
          <Logout />
        </div>
      </div>
    </nav>
  )
}

export default Navigation