import React from 'react'

const Card = (props) => (
   <div>
     <h1>Current Weather in {props.payload.name}</h1>
     <h2>Forecast: {props.payload.weather[0].description}</h2>
     <h3>Current: {props.payload.main.temp}</h3> 
     <h3>High: {props.payload.main.temp_max}</h3> 
     <h3>Low: {props.payload.main.temp_min}</h3> 
     <h3>Wind Speed: {props.payload.wind.speed}</h3> 
   </div>
)


export default Card