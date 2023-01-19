import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {products} from "../../../Api/Products";

function ItemListContainer({ saludo }) {
  const [data, setData] = useState([]);
  
  const { phoneCategory } = useParams();
  console.log(phoneCategory);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        const productosFiltrados = products.filter(
          (prod) => prod.category === phoneCategory
        );

        const prodListados = phoneCategory ? productosFiltrados : products;
        setTimeout(() => {
          res(prodListados);
        }, 500);
      });
    };
    getProducts()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [phoneCategory]);

  return (
    <div>
      
      <ItemList items={data} />
      
    </div>
  );
}

export default ItemListContainer;
