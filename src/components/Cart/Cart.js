import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h2 className='carritoVacio'>El carrito esta vacío.</h2>
        )
    }

    return (     
        <div>
            <h2>Carrito</h2>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            <h3>Total: ${total}.-</h3>
            <button onClick={() => clearCart()} className="vaciarButton">Vaciar carrito</button>
            <Link to='/checkout' className="pedirButton">Realizar pedido</Link>
        </div>
    )
}

export default Cart