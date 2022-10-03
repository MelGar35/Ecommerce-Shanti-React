import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import Button from '../Button/Button';

const Navbar = () => {
    return(
    <nav className='Navbar'>
        <div>
            <h1>
                Shanti
            </h1>
        </div>
        <div>
            <Button Label={'Sahumos'} estilos={'Button'} action={()=>console.log('click')}/>
            <Button Label={'Libros'} estilos={'Button'} action={()=>console.log('click')}/>
            <Button Label={'Tarot'} estilos={'Button'} action={()=>console.log('click')}/>
            <Button Label={'Ceramica'} estilos={'Button'} action={()=>console.log('click')}/>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}


export default Navbar