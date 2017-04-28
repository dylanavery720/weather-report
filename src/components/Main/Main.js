import React, { Component } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import AppContainer from '../../containers/AppContainer'


class Main extends Component {
  constructor(){
    super()
    this.state = {
      APIkey: '6384d47538058cc99891f13f4702e409',
      draftMessage: 'London',
      payload: null
    }
  }

  componentDidMount() {
    this.fetchWeatherForecast()
    // ADD TO LIST OF SEARCHES THE NAME OF CITY AND CURRENT TEMP IN A LIST DISPLAYED ON SIDE.
  }

  fetchWeatherForecast(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.draftMessage}&APPID=${this.state.APIkey}&units=imperial`) 
    .then(response => response.json())
    .then(data => this.props.displayWeatherForecast(data))
  }

  render() {
    const { payload } = this.state
    console.log(this.props)
    return (
      <div>
      {this.props.weather && <Card payload={this.props.weather} />}
      </div>
    )
  }
}

export default AppContainer(Main);