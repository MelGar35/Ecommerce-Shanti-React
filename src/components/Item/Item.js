import "./Item.css"
import {Link} from "react-router-dom"


const Item = ({prod}) => {
    return(
        <div className="card">
            <h1>{prod.name}</h1>
            <img src={prod.imgSrc} alt={prod.name} className='img'/>
            <h2>Precio: ${prod.price}.-</h2>
            <Link to={`/detail/${prod.id}`} className="buttonDetail">Ver detalle</Link>

        </div>
    )
}

export default Item