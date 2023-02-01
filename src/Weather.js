import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-wrapper">
        <div class="weather-app">
          <WeatherSearch />

          <div class="overview">
            <h1 id="city"></h1>
            <ul>
              <li>
                Last updated: <span id="currentDate"></span>
              </li>
              <li id="currentCondition"></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="60"
              />
              <span id="currentTemp">83</span>
              <span class="units">
                <a href="#" id="farenheit-link" class="active">
                  °F
                </a>{" "}
                |
                <a href="#" id="celcius-link">
                  C°
                </a>
              </span>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="currentHumidity"></span>%
                </li>
                <li>
                  Wind: <span id="currentWind"></span>mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<div id="credit">
  <small>
    <a href="https://github.com/JordanDlmt/final-weatherapp" target="_blank">
      Open-source code
    </a>
    by Darlene Jordan
  </small>
</div>;
