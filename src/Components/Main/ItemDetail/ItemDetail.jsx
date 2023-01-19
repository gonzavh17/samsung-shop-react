import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="container-detail">
      <div className="information">
        <h3>{item.name}</h3>
        <img alt={`{Samsung ${item.name}}`} src={item.image} className="img" />
        <p>{`U$D ${item.price}`}</p>
        <p>{`${item.memory} GB`}</p>
      </div>

      <div className="information-container">
        <div className="aditional-information">
          <p>Reseñas de nuestros usuarios: {item.review}</p>
        </div>

        <div className="cart">
          <button>+</button>
          <p>4</p>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
