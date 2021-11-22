import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("metric");
  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  let metricTemperature = props.metricTemperature;
  let imperialTemperature = Math.round((metricTemperature * 9) / 5 + 32);

  if (unit === "metric") {
    return (
      <li>
        <span className="temp">{metricTemperature}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li>
        <span className="temp">{imperialTemperature}</span>
        <span className="unit">
          <a href="/" onClick={showMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </li>
    );
  }
}
