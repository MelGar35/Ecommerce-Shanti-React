import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
    <nav className='Navbar'>
        <div>
            <h1>
                Shanti
            </h1>
            
        </div>
        <div>
            <Link to={`/`} className="button">Inicio</Link>
            <Link to={`/category/sahumos`} className="button">Sahumos</Link>
            <Link to={`/category/libros`} className="button">Libros</Link>
            <Link to={`/category/tarot`} className="button">Tarot</Link>
            <Link to={`/category/ceramica`} className="button">Ceramica</Link>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}


export default Navbar