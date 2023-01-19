import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../Api/Products";
import { useEffect } from "react";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

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
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;
