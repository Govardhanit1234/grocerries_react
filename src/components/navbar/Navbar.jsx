import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <div className="navbar container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-input">
        <input type="text" name="search" placeholder="Search for Products, Brands and more" />
      </div>
      <div className="cart-icon">
        <span>Cart <i className="fi fi-rr-shopping-cart"></i></span>
      </div>
    </div>
  );
}

export default Navbar;
