import React, { useState } from "react";
import Product from "./components/Product";
import ProductDelete from "./components/ProductDelete";
import Header from "./components/Header";
import AddProductForm from "./components/AddProductForm";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handelFormOpen = () => {
    setFormOpen(true);
  };

  const handelFormClose = () => {
    setFormOpen(false);
  };

  return (
    <div className="container">
      <Header handelFormOpen={handelFormOpen} />
      <Product />
      {formOpen && <AddProductForm handelFormClose={handelFormClose} />}
      {/* <ProductDetails /> */}
    </div>
  );
};

export default App;
