import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
function fahrenheit() {
    return (props.celsius * 9) / 5 + 32
}
    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units">
              <a href="/" className="text-decoration-none text-white">
               °C
              </a>
              |
              <a href="/" onClick={showFahrenheit} className="text-decoration-none text-white">
                °F
              </a>
            </span>
          </div>
        );
    } else {
      
        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="units">
              <a href="/" onClick={showCelsius} className="fs-6 text-decoration-none units">
              °C
              </a>{" "}
              | °F
            
            </span>
          </div>
        );
    }

}