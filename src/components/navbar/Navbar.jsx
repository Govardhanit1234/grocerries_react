import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';  // Assuming logo image is stored in assets
import { useSelector } from 'react-redux';  // To access Redux state
import { Link } from 'react-router-dom';  // For routing

function Navbar() {
  // Get the length of the cart items from Redux store
  const cartLength = useSelector((state) => state.cart.items.length);

  return (
    <div className="navbar container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Search Input */}
      <div className="search-input">
        <input type="text" name="search" placeholder="Search for Products, Brands and more" />
      </div>

      {/* Cart Icon (with the number of items in the cart) */}
      <Link to="/cart"> {/* Link to Cart Page */}
        <div className="cart-icon">
          <div className="cart-badge">
            <span>{cartLength}</span> {/* Display cart item count */}
          </div>
          <i className="fi fi-rr-shopping-cart"></i> {/* Cart icon */}
          <span className="cart-text">Cart</span> {/* Text "Cart" */}
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
