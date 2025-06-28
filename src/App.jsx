import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import ProductDelete from "./components/ProductDelete";
import Header from "./components/Header";
import AddProductForm from "./components/AddProductForm";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //fetch states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsActions = {
    products: products,
    setProducts: setProducts,
    loading: loading,
    setLoading: setLoading,
    error: error,
    setError: setError,
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3003/products");
      if (!res.ok) {
        throw new Error("Couldn't fetch data try again!");
      }
      const data = await res.json();
      setError(null);
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <Product
        handleEdit={handleEdit}
        fetchProductsActions={fetchProductsActions}
      />
      {formOpen && (
        <AddProductForm
          handelFormClose={handelFormClose}
          selectedProduct={selectedProduct}
          handleRefetch={fetchProducts}
        />
      )}
    </div>
  );
};

export default App;
