import React from "react";
import Button from "./Button";
import { IoCloseSharp } from "react-icons/io5";

const ProductDelete = ({ handleDeleteModelClose, onDelete }) => {
  return (
    <div className="product--delete-container">
      <div className="product--delete">
        <IoCloseSharp className="icon" onClick={handleDeleteModelClose} />
        <h3>Delete Product</h3>
        <p className="product--delete__description">
          Are you sure to delete the product?
        </p>
        <div className="product--btns">
          <Button
            className="btn--primary"
            btnText="Delete Product"
            btnIcon={""}
            handelClick={onDelete}
          />
          <Button
            handelClick={handleDeleteModelClose}
            className="btn--primary--300"
            btnText="Cancel"
            btnIcon={""}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDelete;
