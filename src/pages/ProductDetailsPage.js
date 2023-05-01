import { useParams } from "react-router-dom"


const ProductDetailsPage = () =>{
    const {id} = useParams()
    
    return <p>{id}</p>
}

export default ProductDetailsPage