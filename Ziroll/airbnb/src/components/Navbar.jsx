import React from "react";
import "./navbar.css";
const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Theme" },
];
const Navbar = () => {
  return (
    <nav
      style={{
        boxShadow: "0px, 2.9px, 7.4px, rgba(0,0,0,0.1) ",
      }}
    >
      <img
        src="./src/assets/Airbnb-logo.png"
        alt=""
        style={{ width: "120px", marginLeft: "30px" }}
      />
    </nav>
  );
};

export default Navbar;
