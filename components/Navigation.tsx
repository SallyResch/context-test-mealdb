import Link from "next/link"

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className="bg-amber-500 font-semibold p-2">
        <div className="max-w-md flex flex-row justify-evenly m-auto">
        <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded-2xl p-2" href={"/"}>Home</Link>
        <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded-2xl p-2" href={"/about"}>About</Link>
        <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded-2xl p-2" href={"/categories"}>Categories</Link>
        <Link className="text-fuchsia-950 hover:bg-fuchsia-950 hover:text-amber-500 rounded-2xl p-2" href={"/profile"}>Profile</Link>
        </div>
    </div>
  )
}

export default Navigation