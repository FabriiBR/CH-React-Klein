import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])
    const [contador, setContador] = useState(0)

    const isInCart = item => cart.find(product => product.id === item.id);

    const addItem = (item, quantity) => {

      if(isInCart(item)) {
        const newCart = [...cart]
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += quantity;
        setCart(newCart);
        return;
      }
        item.quantity = quantity;
        setCart([...cart, item])

    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    };
      
    const clearCart = () => {
        setCart([]);
    };

    const totalProductPrice = (item) => {
      return item.quantity * item.price
    };

    const totalPrice = (cart) => {
      return cart.map(p => totalProductPrice(p)).reduce((a,b) => a + b)
    }; 

    const onAdd = (quantity, setter, stock) => {
      (quantity < stock) ? (setter(quantity+1)) : (alert("No tenemos más stock"))
    };

    const onSubmit = (quantity, setter) => {
      (quantity >= 1) ? (setter(quantity-1)) : (alert("No tienes productos agregados"))
    };

    const addQuantity = (item, setter, stock) => {
      if (item.quantity < stock) {
        const newCart = [...cart];
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += 1;
        setter(newCart);
        return;
      }else{
        alert("No tenemos más stock")
      }
    };

    const removeQuantity = (item, setter) => {
      if (item.quantity > 1) {
        const newCart = [...cart];
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity -= 1;
        setter(newCart);
        return;
      }
    };

    return (
        <CartContext.Provider 
          value ={{cart, 
                  contador, 
                  setCart, 
                  setContador, 
                  onAdd, 
                  onSubmit, 
                  addItem, 
                  addQuantity, 
                  removeQuantity, 
                  removeFromCart, 
                  clearCart, 
                  totalProductPrice, 
                  totalPrice  
          }}>
          {children}
        </CartContext.Provider>
    )
}
