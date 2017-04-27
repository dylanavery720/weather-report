import React, { Component } from 'react'
import Button from '../Button/Button'

export default class Main extends Component {
  componentDidMount() {
    this.fetchWeatherForecast()
  }

  // handleSearch(e) {
  //   this.setState({ draftMessage: e.target.value }, () => {
  //     if (this.state.draftMessage.length > 0) {
  //       this.props.fetchData()
  //     } else {
  //       this.props.fetchData()
  //     }
  //   })
  // }

  fetchWeatherForecast(){
    fetch(`api.openweathermap.org/data/2.5/weather?q=London&APPID=6384d47538058cc99891f13f4702e409`, {
      method: 'GET',
      headers: {
        'X-Xapp-Token': `${this.state.accessToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    // const { fetch } = this.props
    return (
      <div>
      <p>Working</p>
      </div>
    )
  }
}

