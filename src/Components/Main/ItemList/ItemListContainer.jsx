import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "../../../Api/Products";
import { productsCollection } from "../../../firebase-config";
import { getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { phoneCategory } = useParams();

  useEffect(() => {
    const getProducts = () => {
      let filtro;

      if (phoneCategory) {
        filtro = query(
          productsCollection,
          where("category", "==", phoneCategory)
        );
      } else {
        filtro = productsCollection;
      }

      const pedidoPorCategoria = getDocs(filtro);

      pedidoPorCategoria
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setData(productos);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
  }, [phoneCategory]);

  return (
    <div>
      <ItemList items={data} />
    </div>
  );
}

export default ItemListContainer;
