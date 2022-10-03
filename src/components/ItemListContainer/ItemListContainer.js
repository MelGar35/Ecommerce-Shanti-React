import { useState, useEffect } from "react"
import {getProducts} from "../../asyncMock"

const ItemListContainer = ({greeting}) => { 
    const [products,setProducts] = useState ([])
    useEffect(()=>{
        getProducts().then(products=>{
            setProducts(products)
        })
    },[])

return (
    <div>
        <h1>{greeting}</h1>
        <div>
            {products.map (prod =>(
            <div key={prod.id}>
                <h1 className="cardTitle">{prod.name}</h1>
                <h2 className="cardPrice">${prod.price}.-</h2>
                <button>Ver detalle</button>
                
            </div>
            ))
            }
        </div>
    </div>    
)

}

export default ItemListContainer