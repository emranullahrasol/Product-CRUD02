import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { BsCardList } from "react-icons/bs";
import Input from "./Input";

const Product = ({ handleEdit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Get all products:-
  useEffect(() => {
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
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3003/products/${id}`, {
        method: "Delete",
      });

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product--container">
      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="loading">Loading Products</p>}
      <div className="product--flex">
        <h3 className="product--heading">
          <BsCardList className="icon" />
          Products List
        </h3>
        <b>Total Products: {products.length}</b>
        <b>
          Total Products Price:{" "}
          {products.reduce((total, products) => total + products.price, 0)}
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
