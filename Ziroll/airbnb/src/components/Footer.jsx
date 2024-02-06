import React from "react";

const jokes = [
  { title: "joke1", joke: "lol23" },
  { title: "joke2", joke: "lol34" },
  { title: "joke3", joke: "lol45" },
  { title: "joke4", joke: "lol54" },
];
const Footer = (props) => {
  return (
    <div>
      <ol>
        {jokes.map((item) => (
          <li>
            {item.title}
            {item.joke}
            {props.idea}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Footer;
