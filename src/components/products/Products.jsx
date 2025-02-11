import React, { useEffect, useState } from 'react';
import './products.css';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/createCart';
import { PAGE_SIZE } from '../constants/Constants';

function Products() {
    const [productsData, setProductsData]  = useState([]);
    const [popupMessage, setPopupMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(0) ;
    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=500");
        const json = await data.json();
        setProductsData(json?.products);
    };

    useEffect(() => {
       fetchData();
    }, []);

    const totalProducts = productsData.length;
    const noOfPages = Math.ceil(totalProducts/PAGE_SIZE)
    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE


    const handleCart = (product) => {
        dispatch(addCart(product));
        setPopupMessage(`${product.title} has been added to the cart!`);
        setTimeout(() => setPopupMessage(""), 2000); // Hide popup after 2 seconds
    };


    const handlePageChange=(n)=>{
        setCurrentPage(n)
    }

    const goToNextPage=()=>{
         setCurrentPage((prev)=>prev+1)
    }

    const goToPrevPage=()=>{
        setCurrentPage((prev)=>prev-1)

   }
    

    return (
        
        <div>
          <div className='pagination'>
          <button disabled={currentPage === 0} onClick={goToPrevPage}>
    <i className="fi fi-rr-arrow-small-left"></i>
</button>
{[...Array(noOfPages).keys()].map((n) => (
    <button key={n} className={n === currentPage ? "active" : ""} onClick={() => handlePageChange(n)}>
        {n + 1}
    </button>
))}
<button disabled={currentPage === noOfPages - 1} onClick={goToNextPage}>
    <i className="fi fi-rr-arrow-small-right"></i>
</button>

          </div>
            <div className='products-container'>

            {popupMessage && <div className="popup">{popupMessage}</div>}

            
            {productsData.slice(start,end).map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.thumbnail} alt={product.title} className="product-img" />
                    <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">₹{product.price} <span className="discount">({product.discountPercentage}% OFF)</span></p>
                        <p className="product-stock">Stock: {product.stock > 0 ? `${product.stock} left` : "Out of stock"}</p>
                        <p className="product-rating">⭐ {product.rating}</p>
                        <p className="product-sku">SKU: {product.sku}</p>
                        <button className="buy-btn" onClick={() => handleCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
            </div>
              
              
        </div>
    );
}

export default Products;
