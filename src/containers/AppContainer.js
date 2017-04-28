import React from 'react'
import { connect } from 'react-redux'
import { displayWeatherForecast } from '../actions'

const mapStateToProps = (state) => {
  return {
    weather: state.forecast
  }
}

const mapDispatchToProps = {
  displayWeatherForecast
}

export default connect(mapStateToProps, mapDispatchToProps)