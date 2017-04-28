export const displayWeatherForecast = (payload) => {
  return {
    type: 'DISPLAY_FORECAST',
    payload
  }
}

export const deleteFave = (movie) => {
  return {
    type: 'DELETE_FAVE',
    movie,
  }
}
