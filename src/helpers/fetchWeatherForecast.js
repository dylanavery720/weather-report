  
  const fetchWeatherForecast = (query, APIkey) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6384d47538058cc99891f13f4702e409`) 
    .then(response => response.json())
    .then(data => console.log(data))
  }

  export default fetchWeatherForecast