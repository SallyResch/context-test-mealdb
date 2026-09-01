import Link from "next/link"

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className="bg-amber-500">
        <Link className="text-fuchsia-950" href={"/"}>Home</Link>
        <Link className="text-fuchsia-950" href={"/about"}>About</Link>
        <Link className="text-fuchsia-950" href={"/categories"}>Categories</Link>
        <Link className="text-fuchsia-950" href={"/profile"}>Profile</Link>
    </div>
  )
}

export default Navigation