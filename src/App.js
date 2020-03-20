import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WeatherDetails } from "./components/WeatherDetails";

export default function App() {
  return (
    <div className="App">
      <WeatherDetails />
    </div>
  );
}
