import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((c) => (
    <li key={c}>
      <Link to={`/colors/${c}`}>{c}</Link>
    </li>
  ));

  return (
    <div>
      <header>
        <h1>Add color</h1>
      </header>
      <div>
        <p>Select a color</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;
