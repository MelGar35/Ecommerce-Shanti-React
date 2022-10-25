import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (setCart) => {
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

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} setCart={setCart}/>
        </div>  
    )
}

export default ItemDetailContainer