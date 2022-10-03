import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(()=>{
        getProduct("355").then(product =>{
            setProduct(product)
        })
    
    },[])

    return (
        <div>
            <h1>Detalles del producto</h1>
            <div>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h3>{product.description}</h3>
            </div>
        </div>   

    )
}

export default ItemDetailContainer