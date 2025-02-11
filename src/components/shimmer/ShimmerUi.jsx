import React from "react";
import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-price"></div>
          <div className="shimmer-text shimmer-stock"></div>
          <div className="shimmer-text shimmer-rating"></div>
          <div className="shimmer-text shimmer-sku"></div>
          <div className="shimmer-button"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
