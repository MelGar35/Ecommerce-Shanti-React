import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import './Checkout.css'
import { db } from '../../services/firebase'
import Swal from "sweetalert2"


const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const {cart, total, clearCart} = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')


    const crearOrden = async (e) =>{
        e.preventDefault()
        setLoading(true)

    if (email === email2 && nombre !== "" && apellido !== "" && telefono !== "" && email !== ""){
    
        try{
        const objOrder = {
            buyer: {
                nombre: `${nombre}`,
                apellido: `${apellido}`,
                email: `${email}`,
                email2: `${email2}`,
                telefono: `${telefono}`
            } ,
            items: cart,
            total
        }
        
        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids)))
        const { docs } = productsAddedFromFirestore
    
        const batch = writeBatch(db)
        const outOfStock = []
    
        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity 
        
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()
            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            Swal.fire(
                'Su orden se ha realizado con exito',
                `el código de seguimiento de su orden es ${orderAdded.id}`,
                'success'
            )
            clearCart()
        } else {
            Swal.fire(
                'Hay productos sin stock',
                '',
                'error'
            )
        }
    } catch (error){
        console.log(error)
    } finally{
        setLoading(false)
    }
}else {
    Swal.fire(
        'Debes completar todos los datos',
        '',
        'error'
    )
    setLoading(false)
}
}
    
if(loading){
    return <div>
        <h1>Su orden se esta procesando!</h1>
        <div className='loading2'>
        <h1>Cargando...</h1>
    </div>
    </div>
    
}
    return(
        <>
        <h2>Datos de contacto</h2>
        <form className='form'>
                <input name='nombre'
                className='formInput' 
                value={nombre} 
                placeholder='Nombre' 
                required="required"
                onChange={(e) => setNombre(e.target.value)} />
                <input 
                name='apellido'
                className='formInput' 
                value={apellido}  
                placeholder='Apellido' 
                required="required"
                onChange={(e) => setApellido(e.target.value)}/>
                <input
                name='email' 
                className='formInput' 
                value={email} 
                placeholder='Email' 
                type='email'
                required="required"
                onChange={(e) => setEmail(e.target.value)}/>
                <input
                name='email2' 
                className='formInput' 
                value={email2} 
                placeholder='Confirme Email' 
                type='email'
                required="required"
                onChange={(e) => setEmail2(e.target.value)}/>
                <input
                name='telefono'
                className='formInput' 
                value={telefono} 
                placeholder='Telefono' 
                required="required"
                type='number'onChange={(e) => setTelefono(e.target.value)}/>
                <button type="submit" onClick={crearOrden} className='buttonOrder' >Generar Orden</button>
        </form>
        </>
    )
    }

export default Checkout