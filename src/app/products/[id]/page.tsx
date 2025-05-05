export default async function Product({params}: {params:{id: string}}){
    const {id} = await params;
    console.log("Product ID:", id);
    return(
        <h1>Product: {id}</h1>
    )
}