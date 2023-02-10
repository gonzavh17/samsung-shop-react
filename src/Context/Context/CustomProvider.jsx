import React, {createContext, useState, useContext } from "react";
import { products } from "../../Api/Products";

export const CartContext = React.createContext([]);




const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidad, setCantidad] = useState(0)

  const addProduct = (item, cantidad ) => {

    item.cantidad = cantidad

    setCart([item])
    setCantidad(cantidad)

    const newCart = cart.filter(prod => prod.id !== item.id)
    newCart.push({...item});
    setCart(newCart)

    setTotal(item.price * cantidad)
    
    
    
  }

  

  const clearCart = () => setCart([])

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
  
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)) 


  const contextValue = {
    total,
    clearCart,
    isInCart,
    removeProduct,
    addProduct,
    cantidad,
    cart
  };


  return (
    // <contexto.Provider value={{state: state, addProduct}}>
    //     {props.children}
    // </contexto.Provider>
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

