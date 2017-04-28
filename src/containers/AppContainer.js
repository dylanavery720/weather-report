import React from 'react'
import { connect } from 'react-redux'
import { displayWeatherForecast, saveWeather } from '../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    weather: state.weather.forecast,
    history: state.history
  }
}

const mapDispatchToProps = {
  displayWeatherForecast,
  saveWeather
}

export default connect(mapStateToProps, mapDispatchToProps)