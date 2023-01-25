import React from "react";
import Contador from "../Contador/Contador";


export const ItemDetail = ({ item }) => {
  return (
    <div className="container-detail">
      <div className="information">
        <h3>{item.name}</h3>
        <img alt={`{Samsung ${item.name}}`} src={item.image} className="img" />
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
          <Contador/>
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
