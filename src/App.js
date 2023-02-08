import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div class="weather-wrapper">
            Weather App
            <Weather />
          </div>
        </header>{" "}
        <footer>
          This project was coded by Darlene Jordan and is{" "}
          <a
            href="https://github.com/JordanDlmt/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
