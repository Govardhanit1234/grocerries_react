import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css"; // Import CSS file
import ShimmerUIProducts from "./ShimmerUIProducts";
import Product from "./Product";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Product Details:", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
    <ShimmerUIProducts/>
    );

  if (error) return <p>{error}</p>;

  return (
   <Product product={product} />
  );
}

export default ProductDetails;
