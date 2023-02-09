import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../Api/Products";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  
  const { id } = useParams();
//   console.log(id);

  useEffect(() => {
    const getProduct = () => {
      return new Promise((res, rej) => {
        const filtredProducts = products.find((prod) => prod.id === id);
        setTimeout(() => {
          res(filtredProducts);
        }, 500);
      });
    };
    getProduct()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
