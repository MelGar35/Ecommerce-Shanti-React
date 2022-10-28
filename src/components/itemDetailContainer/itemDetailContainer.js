import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useAsync } from '../../hooks/useAsync'
import { getProductsById } from '../../services/firebase/firestore'


const ItemDetailContainer = 
({setCart}) =>{
    const { productId } = useParams()

    const {data: product, loading} = useAsync(() => getProductsById(productId), [productId])

    if (loading) {
        return (
            <h2>Cargando...</h2>
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