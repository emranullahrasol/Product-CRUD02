import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Stage from "./Stage";
import ProductDelete from "./ProductDelete";
import ProductDetails from "./ProductDetails";

const ProductList = ({ product, handleEdit, handleDelete }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [productDetails, setProductDetails] = useState(false);

  const handleDeleteModel = () => {
    setConfirmation(true);
  };
  const handleDeleteModelClose = () => {
    setConfirmation(false);
  };

  const handleProductDetails = (id) => {
    setProductDetails(true);
    console.log(id);
  };

  const handleProductDetailsClose = () => {
    setProductDetails(false);
  };

  return (
    <>
      {productDetails && (
        <ProductDetails
          handleProductDetailsClose={handleProductDetailsClose}
          product={product}
        />
      )}
      {confirmation && (
        <ProductDelete
          handleDeleteModelClose={handleDeleteModelClose}
          onDelete={() => {
            handleDelete(product.id);
            setConfirmation(true);
          }}
        />
      )}

      <li className="product--list">
        <span className="product--name">
          {product.name.slice(0, 10) + "..."}
        </span>
        <span className="product--description">
          {product.description.slice(0, 15) + "..."}
        </span>
        <span className="product--price">{product.price}</span>
        <span className="product--stock">{product.stock}</span>
        <span className="product--category">
          <Stage
            stageText={product.category}
            className={`stage--sm ${
              product.category === "Electronics"
                ? "stage--primary"
                : "stage--primary--400"
            }`}
          />
        </span>
        <span className="product--date">{product.date}</span>
        <span className="product--actions">
          <FaPen className="icon" onClick={() => handleEdit(product)} />
          <FaTrash className="icon" onClick={handleDeleteModel} />
          <FaEye
            className="icon"
            onClick={() => handleProductDetails(product.id)}
          />
        </span>
      </li>
    </>
  );
};

export default ProductList;
