import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, imgSrc, description, price, stock}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd ={
            id, name, price, quantity
        }
        addItem(productToAdd)
    }

    return(
        <div className="cardDetail">
            <h2>{name}</h2>
            <img src={imgSrc} alt={name} className='imgDetail'/>
            <h3>Precio: ${price}.-</h3>
            <h3>{description}</h3>
            {quantityToAdd === 0 ? (<ItemCount onConfirm={handleOnAdd} stock={stock}/>) : (<Link to='/cart' className='buttonFinish'>Finalizar compra</Link>)}
            <Link to={`/detail/${id}`} className="buttonAgregar">Agregar al carrito</Link>
        </div>
    )
}

export default ItemDetail