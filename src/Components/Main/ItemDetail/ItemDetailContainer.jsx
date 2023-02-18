import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productsCollection } from "../../../firebase-config";
import { getDoc, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    
    const getProduct = () => {
      
      const docReference = doc(productsCollection, id )

      const pedido = getDoc(docReference)

      pedido
      .then((resultado) => {
        const producto = resultado.data()
        setItem(producto)
      })
      .catch((error) => {
        console.log(error)
      })

    }
    getProduct()
  }, [id]);

  
  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer;

