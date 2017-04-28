export const displayWeatherForecast = (payload) => {
  return {
    type: 'DISPLAY_FORECAST',
    payload
  }
}

export const searchHistory = (payload) => {
  return {
    type: 'DISPLAY_HISTORY',
    payload
  }
}

export const saveWeather = (payload) => {
  return (dispatch) => {
    dispatch(searchHistory(payload))
    dispatch(displayWeatherForecast(payload))    
  }
}