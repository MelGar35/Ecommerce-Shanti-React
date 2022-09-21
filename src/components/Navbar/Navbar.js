import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return(
    <nav>
        <div>
            <h1>
                Shanti
            </h1>
        </div>
        <div>
            <button>Sahumos</button>
            <button>Libros</button>
            <button>Bazar</button>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default Navbar