import Input from "./Input";
import Button from "./Button";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

import { useEffect } from "react";

const AddProductForm = ({
  handelFormClose,
  selectedProduct,
  handleRefetch,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("fruit");
  const [date, setDate] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setStock(selectedProduct.stock);
      setCategory(selectedProduct.category);
      setDate(selectedProduct.date);
      setSelectedId(selectedProduct.id);
    }
  }, [selectedProduct]);
  const postProduct = async () => {
    const productData = {
      name,
      description,
      price,
      stock,
      category,
      date,
    };
    let response = {};

    if (selectedId !== null) {
      const data = await fetch(`http://localhost:3003/products/${selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      response = data.ok;
    } else {
      const data = await fetch("http://localhost:3003/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      response = data.ok;
    }
    return response;
  };

  const resetForm = () => {
    // Clear form after submission
    setName("");
    setDescription("");
    setPrice(0);
    setStock(0);
    setCategory("fruit");
    setDate("");
    setSelectedId(null);
    handelFormClose();
    handleRefetch();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock || !category || !date) return;

    const response = await postProduct(); 
    if (response) {
      resetForm();
    }
  };

  return (
    <div className="form--container">
      <form className="form" onSubmit={handleSubmit}>
        <FaX className="icon" onClick={handelFormClose} />
        <div className="input-groups">
          <label htmlFor="name">
            Product Name<sup>*</sup>
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name for product"
          />
        </div>

        <div className="input-groups">
          <label htmlFor="name">
            Product Description<sup>*</sup>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="input-groups">
          <label htmlFor="name">
            Product Price<sup>*</sup>
          </label>
          <Input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter name for product"
          />
        </div>

        <div className="input-groups">
          <label htmlFor="name">
            Product stock<sup>*</sup>
          </label>
          <Input
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            placeholder="Enter product stock"
          />
        </div>

        <div className="input-groups">
          <label htmlFor="name">
            Product category<sup>*</sup>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="fruit">Fruit</option>
            <option value="electronic">Electronic</option>
            <option value="health">health</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="input-groups">
          <label htmlFor="name">
            Product Date<sup>*</sup>
          </label>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type={"date"}
            placeholder="Enter product stock"
          />
        </div>
        <Button
          type={"submit"}
          btnText={selectedId === null ? "add new product" : "update product"}
          btnIcon=""
        />
      </form>
    </div>
  );
};

export default AddProductForm;
