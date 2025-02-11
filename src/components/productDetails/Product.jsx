import React from 'react'

function Product({product}) {
  return (
         <div className="product-container">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="rating">⭐ {product.rating} | {product.stock} Reviews</p>
        <p className="price">
          ₹{product.price} <span className="old-price">₹{product.price * 2}</span>
          <span className="discount"> 50% off</span>
        </p>
        <p className="description">{product.description}</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  )
}

export default Product