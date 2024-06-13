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
  {
    id: 3,
    title: "GOT3",
    author: "George RR Martin",
    src: "https://m.media-amazon.com/images/I/51rDpMtBm5L.jpg",
  },
  {
    id: 4,
    title: "GOT4",
    author: "George RR Martin",
    src: "https://m.media-amazon.com/images/I/51rDpMtBm5L.jpg",
  },
];

const Book = (props) => {
  const handleBuy = () => {
    console.log("clicked");
  };
  const handleGetBook = () => {
    props.getBook(props.id);
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
        <button onClick={handleGetBook}>Get Book</button>
      </div>
    </div>
  );
};

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((item) => {
      return item.id === id;
    });
    console.log(book);
  };
  return books.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Book {...item} getBook={getBook} />
      </div>
    );
  });
};

function App() {
  return (
    <>
      <BookList />
    </>
  );
}

export default App;
