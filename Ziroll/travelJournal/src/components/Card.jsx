import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "75%" }}>
      <div className="left">
        <img
          style={{ height: "200px" }}
          src="https://japanupclose.web-japan.org/files/100462016.jpeg"
          alt=""
        />
      </div>
      <div className="right">
        <div className="head">
          <span>Location: {props.location}</span>
          <a href={props.maps}>Open Google Maps</a>
        </div>
        <div className="information">
          <span className="title">{props.title}</span>
          <span>{props.date}</span>
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
