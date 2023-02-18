import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

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
        <div className="categorie-title-container">
          <Link to="/categoria/galaxyS">
          <a className='categorie-title'>Galaxy S</a>
          </Link>
          <Link to="/categoria/galaxyA">
          <a className='categorie-title'>Galaxy A</a>
          </Link>
          <Link to="/categoria/galaxyZ">
          <a className='categorie-title'>Galaxy Z</a>
          </Link>
        </div> 
      </div>
    </div>
  )
}

export default Footer
