import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [emoji, setEmoji] = useState("?");

  const validCode = "🐡🐠🐋";
  function firstFish() {
    setEmoji("🐡");
  }
  function secondFish() {
    setEmoji("🐋");
  }
  function thirdFish() {
    setEmoji("🐠");
  }
  function reset() {
    setEmoji("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={firstFish}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={secondFish}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={thirdFish}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={reset}>
        Reset
      </button>
      <h2>{emoji}</h2>

      {emoji === validCode && <p>Valid code!</p>}
    </div>
  );
}
