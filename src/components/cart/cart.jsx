import { useContext } from "react";
import { CartItem } from "../cartItem/cartItem";
import { CartContext } from "../../context/cartContext";
import {Link} from 'react-router-dom';

export const Cart = () => {
  const {cart, clearCart, totalPrice} = useContext(CartContext);

  return (
    <main className="container">
      <h2>Mi Carrito</h2>
        {cart.length > 0 ? (
          <>
            <div className="container">
              <div className="row">
                {cart.map((props) => <CartItem item={props}/>)}
              </div>
              <button onClick={clearCart} className="btn btn-success">Limpiar carrito</button> 
              <h5>Total a pagar: {totalPrice(cart)}$</h5>
              <Link to ='./form' className="btn btn-primary">Comprar</Link>
            </div> 
          </>
        ) : (
          <>
            <div className="container">
              <p>No tienes productos en el carrito</p>
            </div> 
          </>    
        )}
    </main>
  );
} 