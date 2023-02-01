import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div class="weather-wrapper">
            <div class="weather-app">
              Weather App
              <WeatherSearch />
            </div>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
