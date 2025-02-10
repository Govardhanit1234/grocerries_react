import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/createCart";
 // Ensure correct path
import "./cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="item-image" />
              <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <div className="item-price">
                  <span className="original-price">₹{item.originalPrice}</span>
                  <span className="discounted-price">₹{item.price}</span>
                  <span className="discount-percent">{item.discount}% Off</span>
                </div>
                <p className="delivery-info">Delivery by {item.deliveryDate} | <span className="free-delivery">Free</span></p>
              </div>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <div className="cart-actions">
                <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && <button className="place-order">PLACE ORDER</button>}
    </div>
  );
}

export default Cart;
