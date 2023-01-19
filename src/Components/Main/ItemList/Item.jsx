import React from 'react'
import "./Item.css"

export const Item = (Products) => {
    return (
      <div>
        <div className="card-container">
          <h3>{Products.name}</h3>
          <img alt={`{Samsung ${Products.name}}`} src={Products.image} className="img" />
          <p>{`U$D ${Products.price}`}</p>
          <p>{`${Products.memory} GB`}</p>
  
          
            <li href="#" className="ver-mas">
              Ver Mas
            </li>
    
  
          <button>+</button>
        </div>
      </div>
    );
  };
  

export default Item