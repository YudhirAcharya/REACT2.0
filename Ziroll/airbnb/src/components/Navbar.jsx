import React from "react";
const navLinks = [{ title: "Home" }, { title: "About" }];
const Navbar = () => {
  return (
    <nav>
      {navLinks.map((item) => (
        <li>{item.title}</li>
      ))}
    </nav>
  );
};

export default Navbar;
