import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Weather App
          <Weather />
        </p>
      </header>
    </div>
  );
}

export default App;
