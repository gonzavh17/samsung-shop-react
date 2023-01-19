import React from 'react'

function ItemDetail(data) {
  return (
    <div>
        
        <h3>{data.name}</h3>
        <img
          alt={`{Samsung ${data.name}}`}
          src={data.image}
          className="img"
        />
        <p>{`U$D ${data.price}`}</p>
        <p>{`${data.memory} GB`}</p>

    </div>
  )
}

export default ItemDetail