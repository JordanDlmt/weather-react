import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Weather city="Tokyo" />
        </p>
      </header>
    </div>
  );
}

export default App;
