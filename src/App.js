import React from "react";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        <p>
          <a
            href="https://github.com/lindsaymward/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/lindsaymward21/"
            target="_blank"
            rel="noreferrer"
          >
            Lindsay Ward
          </a>
        </p>
      </footer>
    </div>
  );
}
