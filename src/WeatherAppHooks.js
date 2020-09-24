import React, { useState } from 'react'
import './App.css'
import CityWeatherHooks from './CityWeatherHooks'

export default function WeatherAppHooks(props) {

    const [ city, setCity ] = useState("London");
    const [ cityNameForWeather , setCityNameForWeather ] = useState("London");

   const  changeCity = (e) => {
        setCity(e.target.value)
    }

   const citySearch = (e) => {
        e.preventDefault();
        setCityNameForWeather(city)
    }

    return (
        <div className="container">
            <CityWeatherHooks cityName = {cityNameForWeather}/>
            <div className="row justify-content-center">
                <form onSubmit = {citySearch}>
                    <input type="text" value={city} onChange={changeCity} />
                    <input type="submit" className="btn btn-primary" value="Search!" />
                </form>
            </div>
        </div>
    )
}

