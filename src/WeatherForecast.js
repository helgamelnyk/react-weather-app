import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {

}
let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiURL).then(handleResponse);
return(
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-9">
                <span>Thu </span>
                <span>12 </span>
                <span>9</span>
               <span> <WeatherIcon code="09n" />
               </span>
            </div>
            <div className="col-9">
                gggg
                <WeatherIcon code="01n" />
            </div>
            <div className="col-9">
                gggg
                <WeatherIcon code="01n" />
            </div>
            <div className="col-9">
                gggg
                <WeatherIcon code="01n" />
            </div>
            <div className="col-9">
                gggg
                <WeatherIcon code="01n" />
            </div>
            </div> 
    </div>
)
}