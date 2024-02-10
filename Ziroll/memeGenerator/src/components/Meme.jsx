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
  let [imageURL, setImageURL] = useState(
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
  );
  const randomMemeImg = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    // console.log(memesData.data.memes[randomNumber].url);
    setImageURL(memesData.data.memes[randomNumber].url);
    // console.log(setImageURL);
  };
  const [choice, setChoice] = useState(true);
  const [image, setImage] = useState("");
  const handleChoice = () => {
    setChoice((oldValue) =>
      oldValue == true ? false : true
    );
    setImage((oldValue) => {
      return oldValue == ""
        ? "https://media2.giphy.com/media/3oFzmqENRBkRTRfLcA/giphy.gif?cid=6c09b952srgayw1zucfg0k8a6yuy8z3q4it1sem4tv4gy6qa&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
        : "";
    });
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <span>Do want to buy me lunch?</span>
        <button onClick={handleChoice}>
          {choice === true ? "Yes" : "No"}
        </button>
        <img
          src={image}
          alt=""
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
};

export default Meme;
