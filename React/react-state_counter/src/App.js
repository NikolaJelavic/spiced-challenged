import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increasing = () => {
    setCount(count + 1);
  };
  const decreasing = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={decreasing}>
          -
        </button>
        <button type="button" onClick={increasing}>
          +
        </button>
      </div>
    </div>
  );
}
