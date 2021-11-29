import React from "react";

export default function ForecastDay(props) {
  let minTemp = Math.round(props.data.temp.min);
  let maxTemp = Math.round(props.data.temp.max);
  let date = new Date(props.data.dt * 1000);
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  return (
    <div className="ForecastDay">
      <h2>{day}</h2>
      <img src={iconUrl} alt="Forecast icon" />
      <p>
        <span className="temp-min">{minTemp}°</span> /
        <span className="temp-max"> {maxTemp}°</span>
      </p>
    </div>
  );
}
