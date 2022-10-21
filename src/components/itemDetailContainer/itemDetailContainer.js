import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount"

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

    return (
        <div>
            <h1>Detalle del producto</h1>
            <div className="cardDetail">
            <h2>{product.name}</h2>
            <img src={product.imgSrc} alt={product.name} className='imgDetail'/>
            <h3>Precio: ${product.price}.-</h3>
            <h3>{product.description}</h3>
            <ItemCount stock={product.stock}/>
            <Link to={`/detail/${product.id}`} className="buttonAgregar">Agregar al carrito</Link>
        </div>
        </div>   
    )
}

export default ItemDetailContainer