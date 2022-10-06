import {useState} from "react"
import "./ItemCount.css"

const ItemCount = () =>{
    const [count, setCount] = useState(0)
    
    
    const decrement = () =>{
        if(count > 0){
            setCount (count - 1)
        } 
    }

    const increment = () =>{
        if(count < 15){
            setCount (count + 1)
        } 
    }

    return(
        <div className="counter">
            <button className="counterButton" onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button className="counterButton" onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount