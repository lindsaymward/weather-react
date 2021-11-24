import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <h2>Wed</h2>
          <img src={props.icon} alt="Forecast icon" />
          <p>
            <span className="temp-min">6°</span> /
            <span className="temp-max"> 12°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
