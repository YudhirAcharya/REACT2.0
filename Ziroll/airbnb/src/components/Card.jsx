import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src="./src/assets/katie.png" alt="" />
      <div className="cardStats">
        <span>Stars</span>
        <span> : </span>
        <span>5.0</span>
        <span> USA</span>
      </div>
      <p>Life lessons with katie</p>
      <p>From $100 per night.</p>
    </div>
  );
};

export default Card;
