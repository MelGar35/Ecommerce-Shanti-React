import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const {productId} = useParams()

   
    useEffect(()=>{
        getProduct(productId).then(product =>{
            setProduct(product)
        }).finally(()=>{
            setLoading(false)
        })
    
    },[productId])

    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }

    console.log(product);
    return (
        <div>
            <h1>Detalles del producto</h1>
            <div>
            <h2>{product.name}</h2>
            <h2>${product.price}.-</h2>
            <h3>{product.description}</h3>
           
            </div>
        </div>   
    )
}

export default ItemDetailContainer