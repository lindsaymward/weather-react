import React from "react";

export default function WeatherUnit(props) {
  return (
    <li>
      <span className="temp">{props.metricTemperature}</span>
      <span className="unit">°C</span>
    </li>
  );
}
