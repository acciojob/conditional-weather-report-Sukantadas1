import React, { useState } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  const getTemperatureColor = () => {
    return weatherData.temperature > 20 ? "red" : "blue";
  };

  return (
    <div>
      <h1>Weather App</h1>
      <p style={{ color: getTemperatureColor() }}>
        Current Temperature: {weatherData.temperature}°C
      </p>
      <p>Weather Conditions: {weatherData.conditions}</p>
    </div>
  );
};

export default WeatherApp;
