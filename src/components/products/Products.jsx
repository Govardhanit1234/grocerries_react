import React, { useEffect, useState } from 'react';
import './products.css';

function Products() {
    const [productsData, setProductsData]  = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products/search?q=");
        const json = await data.json();
        setProductsData(json?.products);
    };

    useEffect(() => {
       fetchData();
    }, []);

    return (
        <div className="products-container">
            {productsData.map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.thumbnail} alt={product.title} className="product-img" />
                    <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-brand">Brand: <span>{product.brand}</span></p>
                        <p className="product-price">₹{product.price} <span className="discount">({product.discountPercentage}% OFF)</span></p>
                        <p className="product-stock">Stock: {product.stock > 0 ? `${product.stock} left` : "Out of stock"}</p>
                        <p className="product-rating">⭐ {product.rating}</p>
                        <p className="product-sku">SKU: {product.sku}</p>
                        <button className="buy-btn">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
