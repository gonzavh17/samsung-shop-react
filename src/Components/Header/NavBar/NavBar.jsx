import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="brand-container">Samsung Shop</div>

      <div className="categories-container">
        <li className="categorie">All</li>
        <li className="categorie">Galaxy S</li>
        <li className="categorie">Galaxy A</li>
        <li className="categorie">Galaxy Z</li>
      </div>
      <div className="cart-widget">Cart</div>
    </div>
  );
}

export default NavBar;
