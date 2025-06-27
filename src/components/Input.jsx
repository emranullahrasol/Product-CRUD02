import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({
  placeholder = "some text for placeholder",
  type,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      maxLength={50}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
