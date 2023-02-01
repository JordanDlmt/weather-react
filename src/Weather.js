import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";

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
              <img src="#" alt="clear" id="icon" />
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
          <div class="weather-forcast" id="forecast">
            <div class="row">
              <div class="col-2">
                <div class="weather-forcast-date">Tue</div>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt=""
                  width="60"
                />
                <div class="weather-forcast-temperatures">
                  <span class="weather-forcast-temperature-max">75°</span>
                  <span class="weather-forcast-temperature-min">24°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="credit">
          <small>
            <a
              href="https://github.com/JordanDlmt/final-weatherapp"
              target="_blank"
            >
              Open-source code
            </a>
            by Darlene Jordan
          </small>
        </div>
      </div>
    </div>
  );
}
