import React from 'react'
import Item from './Item'
import "./Item.css"

function ItemList({ items }) {
  return (
    <div>
      <div className="products-container">
        {items.map((product, i) => (
          <Item
            key={i}
            name={product.name}
            price={product.price}
            memory={product.memory}
            image={product.image}
            id={product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemList