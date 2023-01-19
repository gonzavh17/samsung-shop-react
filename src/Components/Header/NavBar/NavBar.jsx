import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="brand-container">
        <Link to="/home">Samsung Shop</Link>
      </div>

      <div className="categories-container">
        <li className="categorie">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="categorie">
          <NavLink to="/">All</NavLink>
        </li>
        <li className="categorie">
          <NavLink to="/categoria/galaxyS">Galaxy S</NavLink>
        </li>
        <li className="categorie">
          <NavLink to="/categoria/galaxyA">Galaxy A</NavLink>
        </li>
        <li className="categorie">
          <NavLink to="/categoria/galaxyZ">Galaxy Z</NavLink>
        </li>
      </div>
      <div className="cart-widget"><CartWidget/></div>
    </div>
  );
}

export default NavBar;

// <li className="categorie">
//   <Link to="/categoria/all">All</Link>
// </li>
// <li className="categorie">
//   <Link to="/categoria/galaxyS">Galaxy S</Link>
// </li>
// <li className="categorie">
//   <Link to="/categoria/galaxyA">Galaxy A</Link>
// </li>
// <li className="categorie">
//   <Link to="/categoria/galaxyZ">Galaxy Z</Link>
// </li>
