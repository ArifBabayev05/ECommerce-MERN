import { useParams } from "react-router-dom"


const ProductDetailsPage = () =>{
    const {id} = useParams()
    
    return <p>sa{id}</p>
}

export default ProductDetailsPage