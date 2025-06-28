import { useState } from "react";
import ProductList from "./ProductList";
import { BsCardList } from "react-icons/bs";
import Input from "./Input";

const Product = ({ handleEdit, fetchProductsActions }) => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const searchedProducts = fetchProductsActions.products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3003/products/${id}`, {
        method: "Delete",
      });

      fetchProductsActions.setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product--container">
      {fetchProductsActions.error && (
        <p className="error">Error: {fetchProductsActions.error}</p>
      )}
      {fetchProductsActions.loading && (
        <p className="loading">Loading Products</p>
      )}
      <div className="product--flex">
        <h3 className="product--heading">
          <BsCardList className="icon" />
          Products List
        </h3>
        <b>Total Products: {fetchProductsActions.products.length}</b>
        <b>
          Total Products Price:{" "}
          {fetchProductsActions.products.reduce(
            (total, product) => total + product.price,
            0
          )}
        </b>
        <Input
          type={"text"}
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="product-header">
        <b>Name</b>
        <b>Description</b>
        <b>Price</b>
        <b>Stock</b>
        <b>Category</b>
        <b>CreatedAt</b>
        <b>Action</b>
      </div>

      <ul className="product">
        {searchedProducts.length === 0 ? (
          <p className="no-product">no Product found</p>
        ) : (
          <>
            {searchedProducts.map((product) => (
              <ProductList
                product={product}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={product.id}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Product;
