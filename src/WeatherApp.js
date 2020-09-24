import React, { Component } from 'react'
import './App.css'
import CityWeather from './CityWeather'

export default class WeatherApp extends Component {
    state = {
        city: "London",
        cityNameForWeather: "London"
    }

    changeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    citySearch = (e) => {
        e.preventDefault();
        this.setState({
            cityNameForWeather: this.state.city
        })
    }

    render() {
        return (
            <div className="container">
            <CityWeather cityName = {this.state.cityNameForWeather}/>
            <div className="row justify-content-center">
                <form onSubmit = {this.citySearch}>
                    <input type="text" value={this.state.city} onChange={this.changeCity} />
                    <input type="submit" className="btn btn-primary" value="Search!" />
                </form>
            </div>
            
            </div>
            
        )
    }
}
