import Input from "./Input";
import Button from "./Button";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const ProductEdit = ({ handelFormClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("fruit");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setStock(0);
    setCategory("fruit");
    setDate("");
    handelFormClose(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!name, !description, !price, !stock, !category, !date)) return;
     
      await fetch("http://localhost:3003/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price,
          stock,
          category,
          date,
        }),
      });
    

    resetForm()
     
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
        <Button type={"submit"} btnText="add new product" btnIcon="" />
      </form>
    </div>
  );
};

export default ProductEdit;
