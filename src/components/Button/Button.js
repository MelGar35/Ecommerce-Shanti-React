import './Button.css'

const Button = ({Label, estilos, action}) => {
    return(
<button className = {estilos} onClick= {action}>
        {Label}
</button>

    )
}

export default Button
