import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(props.date);
  let day = days[date.getDay()];
  let hour = date.getHours();

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = `${hour}:${minutes}am`;
  if (hour > 12) {
    hour -= 12;
    time = `${hour}:${minutes}pm`;
  }
  return (
    <p>
      {day} {time}
    </p>
  );
}
