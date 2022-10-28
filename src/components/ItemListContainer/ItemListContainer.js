import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({greeting}) => { 
    const {categoryId} = useParams()
    const {data: products, loading} = useAsync(() => getProducts(categoryId), [categoryId])
    

    if (loading) {
        return (<h2> Loading...</h2>)
    }

return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>    
)
}

export default ItemListContainer