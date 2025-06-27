import React from "react";
import Stage from "./Stage";
import { FaXmark } from "react-icons/fa6";

const ProductDetails = ({ handleProductDetailsClose, product }) => {
  return (
    <div className="product-details--container">
      <div className="product-details">
        <FaXmark className="icon" onClick={handleProductDetailsClose} />
        <h2 className="product-details-title">{product.name}</h2>
        <p className="product-details-description">{product.description}</p>
        <Stage stageText={product.price} />
        <p className="product-details-category">{product.category}</p>
        <p className="product-details-date">Created At: {product.date}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
