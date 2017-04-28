import React, { Component } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'

export default class Main extends Component {
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
  }

  fetchWeatherForecast(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.draftMessage}&APPID=${this.state.APIkey}&units=imperial`) 
    .then(response => response.json())
    .then(data => this.setState({payload: data}))
  }

  render() {
    const { payload } = this.state
    return (
      <div>
      {payload && <Card payload={payload} />}
      </div>
    )
  }
}

