
type Props = {
    params: Promise<{ category: string }>
}

const Category = async ({ params }: Props) => {

    const { category } = await params
    console.log(category)


    return (
        <div>{category}</div>
    )
}

export default Category