import React from "react";
import Input from "./Input";
import Button from "./Button";
const Header = ({ handelFormOpen }) => {
  return (
    <header className="header">
      <b>GSP 3rd Task</b>
      <Button
        handelClick={handelFormOpen}
        btnText="Add new Product"
        onClick={handelFormOpen}
        className="btn--primary btn--sm"
      />
    </header>
  );
};

export default Header;
