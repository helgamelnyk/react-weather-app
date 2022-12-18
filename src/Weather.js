import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
function handleResponse (response) {
    setWeatherData({
        ready: true,
        date: new Date (response.data.dt * 1000),
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    visibility: response.data.visibility ,
    feelsLike: response.data.main.feels_like,
    })

}

function search() {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
        <div className="Weather">
        <form onSubmit={handleSubmit} className="d-flex justify-content-end me-4">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city"
                      className="form-control city-search"
                      autoComplete="off"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input type="submit" value="Search" className="button" />
                  </div>
                </div>
              </form>
             <WeatherInfo data={weatherData} />
              
        </div>
            );
} else {
   
search();

    return "Loading ...";
}


}