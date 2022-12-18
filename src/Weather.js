import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse (response) {
    setWeatherData({
        ready: true,
        date: response.data.dt * 1000,
    temperature: new Date (response.data.main.temp),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    visibility: response.data.visibility ,
    feelsLike: response.data.main.feels_like,
    })

}

if (weatherData.ready) {

    return (
        <div className="Weather">
        <form className="d-flex justify-content-end me-4">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city"
                      className="form-control city-search"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input type="submit" value="Search" className="button" />
                  </div>
                </div>
              </form>
             
              <div className="d-flex flex-row current-weather">
              <div className="overview">
                <h1 className="city">{weatherData.city}</h1>
                <div className="fs-6 temperature">
                      <strong className="fs-3">{Math.round(weatherData.temperature)} </strong>
                      <span className="units">
                        <a href="/" className="fs-6 text-decoration-none units">
                        °C
                        </a>
                        |
                        <a href="/" className="fs-6 text-decoration-none units">
                          °F
                        </a>
                      </span>
                    </div>
                <ul className="list-grop">
                  <li className="list-group-item fs-4">
                    <FormattedDate date={weatherData.date} />
                    </li>
                  <li className="list-group-item fs-4 description">{weatherData.description}</li>
                </ul>
                <div className="clearfix weather-temperature icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-snow"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
                    </svg>
                
                  </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <ul className="list-grop fs-5 details">
                    <li className="list-group-item">Humidity: {weatherData.humidity} %
                    </li>
                    <li className="list-group-item">Wind: {weatherData.wind} m/s</li>
                    <li className="list-group-item">Visibility: {weatherData.visibility} km</li>
                    <li className="list-group-item">Feels like: {Math.round(weatherData.feelsLike)}˚C</li>
                  </ul>
                </div>
              </div>
              </div>
        </div>
            );
} else {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


    return "Loading ...";
}


}