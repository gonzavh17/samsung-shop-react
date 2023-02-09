import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-title'>
        <h4>Productos y servicios</h4>
        <p>Smartphones</p>
      </div>
      <div className='footer-title'>
        <h4>Contacto</h4>
        <p>Numero de contacto: +54 555 555</p>
        <p>E-mail: Samsungshop@gmail.com</p>
      </div>
      <div className='footer-title'>
        <h4>Categorias</h4>
        <p>Galaxy S</p>
        <p>Galaxy Z</p>
        <p>Galaxy A</p>
      </div>
    </div>
  )
}

export default Footer
