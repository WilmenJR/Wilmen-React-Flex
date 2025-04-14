import { addDoc, serverTimestamp, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import { db } from '../service/firebase';

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [orderId, setOrderId] = useState('')
    const [validateMail, setValidateMail] =useState('')
    const {cart, cartTotal, clear} = useCart()

    const buyerData = (e) => {
        setBuyer(
            {
            ...buyer,
            [e.target.name]: e.target.value
        }
    )

    }
    
    const finalizarCompra = (e) => {

        e.preventDefault()

        if(!buyer.name || !buyer.lastname || !buyer.email || !buyer.address){
            alert('Los campos son requeridos')
        }else if (buyer.email !== validateMail){
            alert('Los mails no son iguales')
        }else{
            let order = {
                comprador:buyer,
                compras:cart,
                total:cartTotal(),
                date:serverTimestamp()
            }
    
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=>{

                cart.forEach((item)=>{
                    const docRef = doc(db, "Celulares", item.id)
                    getDoc(docRef)
                    .then((doc)=>{
                        updateDoc(docRef, {stock:dbDoc.data().stock - item.quantity})
                    })
                    .catch((error)=> console.log(error))
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
        
    }


  return (
    <>
    {
        orderId ? <div>
            <h2>Compra realizada!</h2>
            <h4>Su id es: {orderId}</h4>
        </div>
    :<div>
        <h1>Complete con sus datos</h1>
        <form onSubmit={finalizarCompra}>
      <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre' onChange={buyerData}/>
      <input className='form-control' type="text" name='lastname' placeholder='Ingrese su apellido' onChange={buyerData}/>
      <input className='form-control' type="text" name='address' placeholder='Ingrese su direccion' onChange={buyerData}/>
      <input className='form-control' type="email" name='email' placeholder='Ingrese su correo' onChange={buyerData}/>
      <input className='form-control' type="email" name='second-name' placeholder='Repita su correo' onChange={(e)=>setValidateMail(e.target.value)}/>
      <button className='btn btn-success' type='submit'>Enviar</button>
      </form>
    </div>
    }
    </>
  )
}

export default Checkout
