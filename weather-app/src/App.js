import React, { Component } from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './app.css'

const API_KEY = '2a7c22b9b158cc343fee1766d4b3d086'
class App extends Component {
  state = {
    temperature: undefined,
    longitude: undefined,
    latitude: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        longitude: data.coord.lon,
        latitude: data.coord.lat,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        error: ""
      })
      console.log(this.state)
    } else {
      this.setState({
        temperature: undefined,
        longitude: undefined,
        latitude: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter something"
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className = "app-content">
          <Titles />
          <Form getWeather = { this.getWeather } />
          <Weather
            temperature = { this.state.temperature }
            longitude = { this.state.longitude }
            latitude = { this.state.latitude }
            city = { this.state.city }
            country = { this.state.country }
            humidity = { this.state.humidity }
            description = { this.state.description }
            error = { this.state.error }
          />
        </div>
        <div className = "earth-container">
          <div className = "earth"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
