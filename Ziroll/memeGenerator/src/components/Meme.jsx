import React, { useState } from "react";
import "./meme.css";
import memesData from "../memesData.js";
const Meme = () => {
  const handleClick = () => {
    console.log("button was clicked");
  };
  const handleFocus = () => {
    console.log("image was hovered");
  };
  //   console.log(memesData);
  let imageURL = "";
  const randomMemeImg = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    // console.log(memesData.data.memes[randomNumber].url);
    imageURL = memesData.data.memes[randomNumber].url;
  };

  return (
    <div className="meme">
      <div className="inputs">
        <input type="text" placeholder="MemE top text" />
        <input type="text" placeholder="MemE bottom text" />
      </div>
      <button onClick={(handleClick, randomMemeImg)}>
        Get a new MemE image
      </button>
      <img
        src={imageURL}
        alt=""
        style={{ width: "300px" }}
        onPointerOver={handleFocus}
      />
    </div>
  );
};

export default Meme;
