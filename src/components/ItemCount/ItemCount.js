import {useState} from "react"
import "./ItemCount.css"


const ItemCount = ({onConfirm, stock}) =>{
    const [count, setCount] = useState(0)

    const decrement = () =>{
        if(count > 1){
            setCount (count - 1)
        } 
    }

    const increment = () =>{
        if(count < stock){
            setCount (count + 1)
        } 
    }

    return(
        <div className="counter">
            <button className="counterButton" onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button className="counterButton" onClick={increment}>+</button>
            <div >
                <button onClick={()=> onConfirm(count)} className="buttonAgregar">Agregar al Carrito</button>
            </div>
        </div>
        
    )
}

export default ItemCount
