import { Great_Vibes } from "next/font/google"
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})
const Footer = () => {
  return (
    <div className="bg-fuchsia-950 text-center text-amber-500">
      <p className={`${greatVibes.className} p-4 text-3xl`}>Sally Resch 2026</p>
    </div>
  )
}

export default Footer