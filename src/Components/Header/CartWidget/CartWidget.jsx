import React, {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../Context/Context/CustomProvider'


function CartWidget() {
  const { cantidad } = useContext(CartContext)
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping}/>
      <span>{cantidad}</span>
    </div>
  )
}

export default CartWidget