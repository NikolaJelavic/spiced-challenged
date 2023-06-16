import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">h2</h2>
      <label id="someLabel" htmlFor="someLabel">
        Label
      </label>
      <input id="someLabel" htmlFor="someLabel" />
      <a className="article__link" href="https://google.com">
        Google
      </a>
    </article>
  );
}
