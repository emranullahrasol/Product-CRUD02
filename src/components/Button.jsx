import React from "react";
import { FaPlus } from "react-icons/fa6";

const Button = ({
  btnText = "my Button",
  btnIcon: Icon = <FaPlus />,
  className = "btn--primary",
  type = "button",
  handelClick,
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={handelClick}>
      {Icon}
      {btnText}
    </button>
  );
};

export default Button;
