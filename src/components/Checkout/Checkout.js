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
    const [dni, setDni] = useState('')
    const [email, setEmail] = useState('')

    const crearOrden = async () =>{
        setLoading(true)
        try{

        const objOrder = {
            buyer: {
                nombre: `${nombre}`,
                apellido: `${apellido}`,
                email: `${email}`,
                dni: `${dni}`
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
                `el código de su orden es ${orderAdded.id}`,
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
        <h2> Complete sus Datos </h2>
        <form className='form'>
                <input 
                name='nombre'
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
                name='dni'
                className='formInput' 
                min='7000000' 
                max='99999999' 
                value={dni} 
                placeholder='DNI' 
                required="required"
                type='number'onChange={(e) => setDni(e.target.value)}/>
                <button onClick={crearOrden} className='buttonOrder' >Generar Orden</button>
        </form>
        </>
    )
}

export default Checkout