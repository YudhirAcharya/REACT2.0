import React from "react";
import data from "../Constants.js";
import "./card.css";

const Card = (props) => {
  console.log(data);
  return (
    <div className="card" style={{ flexShrink: "0" }}>
      <img src={props.src} alt="" />
      <div className="cardStats">
        <span>Stars</span>
        <span> : </span>
        <span>{props.stars}</span>
        <span> {props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Card;
