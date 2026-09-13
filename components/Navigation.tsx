"use client"
import Link from "next/link"
import Logout from "./Logout"
import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Categories", href: "/categories" },
    { name: "Profile", href: "/profile" }
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen])

  return (
    <nav>
      <div className="md:hidden bg-amber-500 text-fuchsia-950">

        <div className="flex justify-end p-2">
          <button onClick={handleMenu}>
            <MenuIcon size={40} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed top-35 bg-black/50 z-50 left-0 bottom-0 right-0">
            <div className="fixed top-35 bottom-0 left-[65%] right-0 z-50 bg-amber-500 shadow-2xl">
              <div className="flex justify-end p-2">
                <button onClick={handleMenu}>
                  <XIcon />
                </button>
              </div>
              <div className="flex flex-col h-[calc(100vh-48px)] font-semibold text-lg pl-4">
                {navItems.map((item) => (
                  <Link key={item.href} onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={item.href}>{item.name}</Link>
                ))}
                <Logout />
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="bg-amber-500 font-semibold p-2 hidden md:block">
        <div className="flex flex-row justify-center m-auto">
          {navItems.map((item) => (
            <Link key={item.href} onClick={handleNavClick} className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded p-2" href={item.href}>{item.name}</Link>
          ))}
          <Logout />
        </div>
      </div>
    </nav>
  )
}

export default Navigation