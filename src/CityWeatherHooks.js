import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function CityWeatherHooks(props) {

    const [ cityData, changeCityData] = useState({});

    // we need to make an ajax/http request to the API
    // we dont have lifecycle method..... so we use useEffect
    // useEffect take 2 args:
    // 1. a callback that runs....
    // 2... when to run 1::::
                // 1. undefined(no value) -> run EVERY render (componentDidMount + componenDidUpdate)
                // 2. [] -> run on the first render only (componentDidMount)
                // 3. [...data] -->run on the first render and anytime a var in the array changes (componentDidMount + modified componenDidUpdate)
                // 4. (sort of) - if you return a function, that will run when the componentDidUnmount.. 

    // we cant use async like this

    // useEffect(async()=>{
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;

    //     const resp = await axios.get(url);
    //     console.log(resp.data);
    // })


    useEffect(()=>{
        const fetchWeather = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;

            const resp = await axios.get(url);
            console.log(resp.data);

            changeCityData(resp.data);

            // return ()=>{console.log("Component is unmounting")}
        }
        fetchWeather();
    },[props.cityName])


    if(!cityData.weather)
    return(
        <h1>Loading...</h1>
    )

    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`

    return (
        <div className="container">
            <div className="city-name">{cityData.name}</div>
                <div className="temp">{cityData.main.temp}
                    <img src={iconUrl} />
                </div>
        </div>
    )
}