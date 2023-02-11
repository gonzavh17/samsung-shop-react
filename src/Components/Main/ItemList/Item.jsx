import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../Btn/Btn";
import "./Item.css";

export const Item = (Products) => {
  return (
    <div data-aos="zoom-in">
      <div className="card-container">
        <h3>{Products.name}</h3>
        <img
          alt={`{Samsung ${Products.name}}`}
          src={Products.image}
          className="img"
        />
        <p>{`U$D ${Products.price}`}</p>
        <p>{`${Products.memory} GB`}</p>
        <Link className="ver-mas" to={`/products/${Products.id}`}>
          <Btn data-aos="zoom-in"/>
        </Link>
      </div>
    </div>
  );
};

export default Item;

