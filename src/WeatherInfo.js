import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="d-flex flex-row current-weather">
              <div className="overview">
                <h1 className="city">{props.data.city}</h1>
                <div className="fs-6 temperature">
                      <strong className="fs-2">{Math.round(props.data.temperature)} </strong>
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
                <ul className="list-grop description">
                  <li className="list-group-item fs-4">
                    <FormattedDate date={props.data.date} />
                    </li>
                  <li className="list-group-item fs-4 ">{props.data.description}</li>
                </ul>
                <div className="clearfix icon">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                    </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <ul className="list-grop fs-5 details">
                    <li className="list-group-item">Humidity: {props.data.humidity} %
                    </li>
                    <li className="list-group-item">Wind: {props.data.wind} m/s</li>
                    <li className="list-group-item">Visibility: {props.data.visibility} km</li>
                    <li className="list-group-item">Feels like: {Math.round(props.data.feelsLike)}˚C</li>
                  </ul>
                </div>
              </div>
              </div>
    );
}