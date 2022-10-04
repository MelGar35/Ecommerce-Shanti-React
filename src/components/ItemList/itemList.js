import Item from "../Item/Item"

const itemList = ({products}) => {
    return (
        <div>
            {products.map (prod => (
                <Item key={prod.id} prod={prod}/>
            ))
            }
        </div>
    )
}

export default itemList
