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
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className="md:hidden bg-amber-500 text-fuchsia-950">

        <div className="flex justify-end p-2">
          <button onClick={handleMenu}>
            <MenuIcon size={40} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed top-35 bottom-0 left-[65%] right-0 z-50 bg-amber-500 shadow-2xl">
            <div className="flex justify-end p-2">
              <button onClick={handleMenu}>
                <XIcon />
              </button>
            </div>
            <div className="flex flex-col h-[calc(100vh-48px)] font-semibold text-lg p-4">
              <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/"}>Home</Link>
              <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/about"}>About</Link>
              <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/categories"}>Categories</Link>
              <Link onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={"/profile"}>Profile</Link>
              <Logout />
            </div>
          </div>
        )}
      </div>

      <div className="bg-amber-500 font-semibold p-2 hidden md:block">
        <div className="flex flex-row justify-center m-auto">
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