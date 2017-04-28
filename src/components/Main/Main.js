import React, { Component } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import AppContainer from '../../containers/AppContainer'
import './Main.css';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      APIkey: "6384d47538058cc99891f13f4702e409",
      draftMessage: ""
    }
    this.fetchWeatherForecast = this.fetchWeatherForecast.bind(this)
  }

  handleChange(e){
    this.setState({draftMessage: e.target.value})
  }

  fetchWeatherForecast(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.draftMessage}&APPID=${this.state.APIkey}&units=imperial`) 
    .then(response => response.json())
    .then(data => this.props.saveWeather(data))
  }

  render() {
    return (
      <div className="main">
        <input placeholder="Enter a city..." onChange={(e) => this.handleChange(e)} value={this.state.draftMessage} />
        <Button text="Submit" handleClick={this.fetchWeatherForecast} /> 
        {this.props.weather && <Card payload={this.props.weather} />}
      </div>
    )
  }
}

export default AppContainer(Main);