import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export const CartItem = ({ item }) => {

  const {removeFromCart, totalProductPrice, addQuantity, removeQuantity, setCart} = useContext(CartContext)

  return (
    <div className="col-md-6 col-lg-3 m-auto">
      <div className="card">
        <img className="card-img-top" src={item.photo} alt={item.id} />
        <div className="card-body">
          <h5>{item.name}</h5>
          <p><small className="text-muted">{item.category}</small></p>
          <h5>{ totalProductPrice(item) }$</h5>
          <button onClick={()=> removeFromCart(item.id)}> Quitar del carrito </button>
        </div>
      </div>
    </div>
  )
}