import React, { useState } from "react";
import data from "./data.json";

export const WeatherDetails = () => {
  const [city, setCity] = useState("");
  const [forecastDetails, setForecastDetails] = useState([]);
  const getData = () => {
    for (const d in data.States) {
      const forecast = data.States[d].cities.filter(
        c => c.name === "San francisco".toLowerCase()
      );
      console.log(city);
      if (forecast.length > 0) {
        setForecastDetails(forecast);
      }
    }
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="cityname">City Name</label>
        <input
          className="form-control"
          type="text"
          name="cityname"
          onChange={e => setCity(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={() => getData()}>
        Submit
      </button>
      <h3>{JSON.stringify(forecastDetails, 2)}</h3>
    </>
  );
};
