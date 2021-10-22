import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { Input } from '../input/input'
import { CartContext } from '../../context/cartContext'



import firebase from 'firebase/app'
import { getFirestore } from '../../firebase/firebase'

export const Form = () => {
  const {cart, totalPrice, clearCart} = useContext(CartContext);
  const [cartEmpty, setCartEmpty] = useState (false)
  const [form, setForm] = useState({name:'', mail:'', phone:''})
  const [isDisabled, setIsDisabled] = useState(true)

  const formItems = [
    {
        id:"name",
        label:"Nombre",
        value:form.name
    },{
        id:"mail",
        label:"Mail",
        value:form.mail
    },{
        id:"phone",
        label:"Teléfono",
        value:form.phone
    }
]

  const handleChange = (id, value) => {
    const newForm = {...form, [id]: value}
    setForm(newForm)
  };

  const buyOrder = (e) => {
    updateStock()
    clearCart()
    e.preventDefault()
    const db = getFirestore()
    const orders = db.collection('orders')
    const newOrder = {
                      buyer: form, 
                      items: cart,
                      date: firebase.firestore.Timestamp.fromDate(new Date()),
                      total: totalPrice(cart)
                    }
    orders.add(newOrder)
    setCartEmpty(true)
    alert(`Gracias por tu compra ${form.name}!`)
  };

  const updateStock = () => {
    const db = getFirestore()
    const batch = db.batch()

    cart.forEach((item) => {
        const itemCart = db.collection('courses').doc(item.id)
        batch.update(itemCart, {stock: item.stock - item.quantity})
    })
    batch.commit()
  };

  useEffect (()=> {
    const newDisabledButton = [form.name, form.mail, form.phone].includes('')
    setIsDisabled(newDisabledButton)
  }, [form])

  return (
    <div className="container mb-5 mt-5">
      {!cartEmpty ? (
        <>
          <div className="contForm">
            <form className="formulario">
                {formItems.map (({id, label, value}) => (
                    <Input key={id} id={id} label={label} value={value} onChange={handleChange}/>
                ))}
            </form>
          </div>
          <button disabled={isDisabled} onClick={buyOrder} className="btn btn-primary">Enviar</button>
        </>
        ) : (
        <button className="buttonForm volver">
          <Link to ='/'>Volver al inicio</Link>
        </button>
      )}

    </div>
  )
}