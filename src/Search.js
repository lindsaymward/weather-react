import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";
import Forecast from "./Forecast";

export default function Search() {
  let [cityInput, setCityInput] = useState("");
  let [weatherData, setWeatherData] = useState({ ready: false });
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=5df8b506b715f17ed0c74fd6fd849642&units=metric`;
  function getWeather(response) {
    setWeatherData({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: response.data.dt * 1000,
      ready: true,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(getWeather);
    setCityInput("");
  }

  function updateCityInput(event) {
    setCityInput(event.target.value);
  }

  const searchForm = (
    <div className="Search row">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          autoFocus
          value={cityInput}
          onChange={updateCityInput}
          className="col-sm-9"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary col-sm-3"
        />
      </form>
    </div>
  );
  if (weatherData.ready) {
    return (
      <div>
        {searchForm}
        <div className="row">
          <div className="col-8">
            <ul>
              <li>
                <h1>{weatherData.city}</h1>
              </li>
              <li>
                <img src={weatherData.iconUrl} alt="Weather icon" />
              </li>
              <li className="capitalize conditions">{weatherData.desc}</li>
            </ul>
          </div>
          <div className="col-4">
            <WeatherUnit metricTemperature={weatherData.temp} />
            <ul>
              <span className="conditions">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </span>
            </ul>
          </div>
        </div>
        <div>
          <Forecast icon={weatherData.iconUrl} />
        </div>
      </div>
    );
  } else {
    return searchForm;
  }
}
