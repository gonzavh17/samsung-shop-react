import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = (Products) => {
  return (
    <div>
      <Link className="ver-mas" to={`/products/${Products.id}`}>
        <div className="card-container">
          <h3>{Products.name}</h3>
          <img
            alt={`{Samsung ${Products.name}}`}
            src={Products.image}
            className="img"
          />
          <p>{`U$D ${Products.price}`}</p>
          <p>{`${Products.memory} GB`}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
{
  /* <button className="more-info-btn">More Info</button> */
}
