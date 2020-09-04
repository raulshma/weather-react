import React, { useState, useEffect } from 'react';
import { useCurrentPosition } from 'react-use-geolocation';
import './Weather.css';

function Weather() {
  const [current, setCurrent] = useState();
  const [position, error] = useCurrentPosition();

  useEffect(() => {
    const getCurrentWeather = async () => {
      const response = await fetch('https://weather-react-api.herokuapp.com/api/v1/weather', {
        body: JSON.stringify({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCurrent(data);
      } else {
        alert('Failed to get weather info');
      }
    };
    if (position && !error) getCurrentWeather();
  }, [position, error]);

  if (error) {
    return <p className="loading">{error.message}</p>;
  }

  if ((!position && !error) || !current) {
    return <p className="loading">Allow location access</p>;
  }

  return (
    <div className="weather">
      <div className="header">
        <div className="weather__name">
          <div className="weather__name-temp">
            <h1>
              {current.name}, {current.sys.country}
            </h1>
            <span>{Math.round(current.main.temp)} &deg;C</span>
          </div>
          <h2>{new Date(current.dt * 1000).toLocaleString()}</h2>
        </div>
        <div className="weather__condition">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
            alt={current.weather[0].description}
          ></img>
          <div>
            <span>{current.weather[0].main}</span>
            <span>{current.weather[0].description}</span>
          </div>
        </div>
      </div>
      <div className="weather__temp">
        <span>Feels Like {Math.round(current.main.feels_like)} &deg;C</span>
      </div>
      {/* 
      <div className="weather__wind-cloud">
        <span>Speed: {current.wind.speed} m/s</span>
        <span>Degree: {current.wind.deg}</span>
        <span>Gust: {current.wind.gust} m/s</span>
        <span>Cloudiness: {current.clouds.all}</span>
      </div>
      <div className="weather__extras">
        <span>Pressure: {current.main.pressure} hPa</span>
        <span>Humidity: {current.main.humidity}%</span>
        <span>Sea Level: {current.main.sea_level}</span>
        <span>Ground Level: {current.main.grnd_level}</span>
      </div> */}
    </div>
  );
}

export default Weather;
