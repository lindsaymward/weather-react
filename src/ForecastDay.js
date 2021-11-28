import React from "react";

export default function ForecastDay(props) {

let minTemp = Math.round(props.data.temp.min);
let maxTemp = Math.round(props.data.temp.max);
let date = (props.data.dt * 1000);
let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,

  return (
    <div className="ForecastDay">
      <h2>
        <FormattedDate date={date} />
      </h2>
      <img src={iconUrl} alt="Forecast icon" />
      <p>
        <span className="temp-min">{minTemp}°</span> /
        <span className="temp-max"> {maxTemp}°</span>
      </p>
    </div>
  );
}
