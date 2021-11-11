import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [cityInput, setCityInput] = useState("");
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [iconUrl, setIcon] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=5df8b506b715f17ed0c74fd6fd849642&units=metric`;
  function getWeather(response) {
    setCity(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
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
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          autoFocus
          value={cityInput}
          onChange={updateCityInput}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (temp === "") {
    return searchForm;
  } else {
    return (
      <div>
        {searchForm}
        <ul>
          <li>
            <h2>{city}</h2>
          </li>
          <li>Temperature: {temp}°C</li>
          <li className="capitalize">Description: {desc}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={iconUrl} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  }
}
