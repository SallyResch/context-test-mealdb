import { Great_Vibes } from "next/font/google"
import { Caveat } from "next/font/google"
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
})

const Header = () => {
  return (
    <div className="bg-fuchsia-950 p-2 text-center">
      <h1 className={`${greatVibes.className} text-amber-500 text-6xl mt-4`}>Sally´s</h1>
      <h2 className={`${caveat.className} text-amber-500 text-3xl mt-2 mb-1`}>Coziest corner in town</h2>
    </div>
  )
}

export default Header