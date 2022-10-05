import "./Item.css"
import {Link} from "react-router-dom"


const Item = ({prod}) => {
    return(
        <div className="card">
            <h1 className="cardTitle">{prod.name}</h1>
            <h2 className="cardPrice">${prod.price}.-</h2>
            <Link to={`/detail/${prod.id}`}>Ver detalle</Link>

        </div>
    )
}

export default Item