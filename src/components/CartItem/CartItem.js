import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h4 className="ItemHeaderCartItem">
                    {name}
                </h4>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoPedidoCart">
                    Cantidad: {quantity}
                </p>
                <p className="InfoPedidoCart">
                    Precio Unitario: ${price}.-
                </p>
            </section>           
            <footer className='FooterCartItem'>
                <p className="InfoPedidoCart">
                     Subtotal: ${price * quantity}.-
                </p>
                <button className='eliminarButton' onClick={() => handleRemove(id)}>Eliminar</button>
            </footer>
        </article>
    )
}

export default CartItem