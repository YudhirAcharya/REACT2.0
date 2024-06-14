import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="d-flex justify-content-between bg-info ps-4 pe-5 p-2">
      <Link
        to="/"
        className="h3 text-decoration-none link-dark"
      >
        Shop App
      </Link>
      <Link to="/cart" href="" className="h3 link-dark">
        <BsCart /> {cart.length} items
      </Link>
    </div>
  );
};

export default Navbar;
