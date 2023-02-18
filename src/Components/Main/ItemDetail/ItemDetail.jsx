import { React, useContext, useState } from "react";
import {
  CartContext,
} from "../../../Context/Context/CustomProvider";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

  export const ItemDetail = ({ item }) => {
  const [confirmado, setConfirmado] = useState(false);
  const { addProduct,cart } = useContext(CartContext);
  const [cantidadLocal, setCantidadLocal] = useState(1);

  const handleAdd = (cantidad) => {
    setCantidadLocal(cantidad);
    setConfirmado(true);
  };

  const handleClick = () => {
    addProduct(item, cantidadLocal);
  };

  return (
    <div className="container-detail">
      <div className="information">
        <h3>{item.name}</h3>
        <img alt={`{Imagen de smartphone ${item.name}}`} src={item.image} className="img" />
        <p>Price: {`U$D ${item.price}`}</p>
        <p>Memory: {`${item.memory} GB`}</p>
      </div>

      <div className="information-container">
        <div className="reviewes-container">
          <div className="review-container">
            <p className="review">{item.review1}</p>
            <p className="reviewer">{item.reviewer1}</p>
          </div>
          <div className="review-container">
            <p className="review">{item.review2}</p>
            <p className="reviewer">{item.reviewer2}</p>
          </div>
        </div>

        <div className="container">
          <Contador handleAdd={handleAdd} />
          {confirmado && (
            <Link to="/Cart">
              <button onClick={handleClick}>Confirmar</button>
            </Link>
          )}
        </div>

        <div className="aditional-information">
          <p className="aditional-infomation-title">Informacion Adicional:</p>
          <p>Procesador: {item.procesador}</p>
          <p>Ram: {item.ram}GB</p>
          <p>Camara: {item.camara}</p>
          <p>Batería: {item.bateria}</p>
          <p>Sistema Operativo: {item.os}</p>
          <p>Peso: {item.peso}g</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
