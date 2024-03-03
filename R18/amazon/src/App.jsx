import { useState } from "react";

import "./App.css";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    src: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
  },
  {
    id: 2,
    title: "GOT",
    author: "George RR Martin",
    src: "https://m.media-amazon.com/images/I/51rDpMtBm5L.jpg",
  },
];

const Book = (props) => {
  const handleBuy = () => {
    console.log("clicked");
  };
  return (
    <div className=" bg-slate-500">
      <div key={props.id}>
        <img
          src={props.src}
          alt={props.title}
          style={{ width: "200px" }}
        ></img>
        <h1>{props.title}</h1>
        <h2>By: {props.author}</h2>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

const BookList = () => {
  return books.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Book {...item} />
      </div>
    );
  });
};

const Form = () => {
  const handleForm = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <div>
        <input type="text" placeholder="name" />
        <button type="submit" onClick={handleForm}>
          Submit
        </button>
      </div>
    </form>
  );
};
function App() {
  return (
    <>
      <Form />
      <BookList />
    </>
  );
}

export default App;
