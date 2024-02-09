import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
        alt=""
        style={{ width: "70px" }}
      />
      <span style={{ fontSize: "50px", color: "white" }}>
        MemE Generator
      </span>
    </div>
  );
};

export default Header;
