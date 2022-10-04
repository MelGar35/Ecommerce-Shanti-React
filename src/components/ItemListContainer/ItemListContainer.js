import { useState, useEffect } from "react"
import {getProducts} from "../../asyncMock"
import ItemList from "../ItemList/itemList"
import {useParams} from "react-router-dom"

const ItemListContainer = ({greeting}) => { 
    const [products,setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts(categoryId).then(products=>{
            setProducts(products)
        }).finally(()=> {
            setLoading(false)
        })
    },[categoryId])

    if (loading) {
        return (
            <h2> Loading...</h2>
            )
    }

return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>    
)

}

export default ItemListContainer