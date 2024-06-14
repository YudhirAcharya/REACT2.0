import React from "react";
import { BsCart } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="d-flex justify-content-between bg-info ps-4 pe-5 p-2">
      <a
        href=""
        className="h3 text-decoration-none link-dark"
      >
        Shop App
      </a>
      <a href="" className="h3 link-dark">
        <BsCart />
      </a>
    </div>
  );
};

export default Navbar;
