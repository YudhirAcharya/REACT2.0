import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card" style={{}}>
      <div className="left">
        <img
          style={{ height: "200px" }}
          src={props.item.img}
          alt=""
        />
      </div>
      <div className="right">
        <div className="head">
          <span>Location: {props.item.location}</span>
          <a href={props.item.maps}>Open Google Maps</a>
        </div>
        <div className="information">
          <span className="title">{props.item.title}</span>
          <span>{props.item.date}</span>
          <span>{props.item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
