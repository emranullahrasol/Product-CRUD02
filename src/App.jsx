import React, { useState } from "react";
import Product from "./components/Product";
import ProductDelete from "./components/ProductDelete";
import Header from "./components/Header";
import AddProductForm from "./components/AddProductForm";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormOpen(true);
  };

  const handelFormOpen = () => {
    setFormOpen(true);
  };

  const handelFormClose = () => {
    setFormOpen(false);
    setSelectedProduct(null);
    setFormOpen(false);
  };

  return (
    <div className="container">
      <Header handelFormOpen={handelFormOpen} />
      <Product handleEdit={handleEdit} />
      {formOpen && (
        <AddProductForm
          handelFormClose={handelFormClose}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default App;
