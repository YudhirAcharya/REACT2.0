import React from "react";
const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Theme" },
];
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
      }}
    >
      <img
        src="./src/assets/pngwing.com.png"
        style={{ width: "70px", flex: "0.25" }}
      ></img>
      <ul
        style={{
          flex: "0.75",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {navLinks.map((item) => (
          <li
            key={item.id}
            style={{
              border: "solid 2px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
