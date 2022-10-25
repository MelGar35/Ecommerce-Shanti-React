import cart from "./assets/cart.svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import "./CartWidget.css"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" className="CartWidget">
        <img src={cart} alt="cart"/>
        {totalQuantity}
        </Link>
    )
}

export default CartWidget