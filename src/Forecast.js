import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ ready: false });
  function handleResponse(response) {
    setForecast({
      minTemp: Math.round(response.data.daily[0].temp.min),
      maxTemp: Math.round(response.data.daily[0].temp.max),
      ready: true,
    });
  }
  const apiKey = "5df8b506b715f17ed0c74fd6fd849642";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  if (forecast.ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <h2>Wed</h2>
            <img src={props.icon} alt="Forecast icon" />
            <p>
              <span className="temp-min">{forecast.minTemp}°</span> /
              <span className="temp-max"> {forecast.maxTemp}°</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
