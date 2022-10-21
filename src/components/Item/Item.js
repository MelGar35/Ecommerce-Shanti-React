import "./Item.css"
import {Link} from "react-router-dom"


const Item = ({prod}) => {
    return(
        <div className="card">
            <h2>{prod.name}</h2>
            <img src={prod.imgSrc} alt={prod.name} className='img'/>
            <h3>Precio: ${prod.price}.-</h3>
            <Link to={`/detail/${prod.id}`} className="buttonDetail">Ver detalle</Link>

        </div>
    )
}

export default Item