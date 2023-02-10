import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/Context/CustomProvider";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ventasCollection, productsCollection } from "../../../firebase-config";
import "./Cart.css"

function Cart({ item }) {
  const { addProduct, cart, cantidad, clearCart,total } = useContext(CartContext);
  const clear = () => {
    clearCart()
    window.location.reload(true)
  }

//  const [cartStatus, setCartStatus] = useState[false]


  return (
    <div>
      <h3>Carrito {cantidad}</h3>
      <div className="carrito-container">
      
        {cart.map((item) => (
          <div>
            <h4>Nombre de producto: {item.name}</h4>
            
            <h4>Precio: {item.price}U$D</h4>
            <img className="cart-img" src={item.image} alt={`Imagen de smartphone ${item.name}`} />
          </div>
          
        ))}
      </div>
        <p>Total: {total} U$D</p>
      <button onClick={clear}>Limpiar</button>
    </div>
  );
}

export default Cart;
