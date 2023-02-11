import {React, useState} from 'react'
import "../ItemDetail/ItemDetail.css";

function Contador({handleAdd}) {
    const [cantidad, setCantidad] = useState(1);
    
    const sumar = () => {
        if(cantidad)
            setCantidad(cantidad + 1)
    }

    const restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    const handleConfirmar = () => {
        handleAdd(cantidad)
    }

    return (
    <div className='contador-container'>
        <div className="contador">
            <button onClick={restar} className='contador-button'>-</button>
            <p className='cantidad'>{cantidad}</p>
            <button onClick={sumar} className='contador-button'>+</button>
            <button onClick={handleConfirmar}>Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default Contador
