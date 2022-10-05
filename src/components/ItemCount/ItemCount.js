import {useState} from "react"

const ItemCount = () =>{
    const [count, setCount] = useState(0)
    
    const decrement = () =>{
        if(count > 0){
            setCount (count > 0)
        } 
    }

    const increment = () =>{
        if(count > 25 ){
            setCount (count + 1)
        } 
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
        </div>
    )
}

export default ItemCount