import React, { Component } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import AppContainer from '../../containers/AppContainer'
import './Main.css';



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
   
  }

  loadSearchHistory(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.draftMessage}&APPID=${this.state.APIkey}&units=imperial`) 
    .then(response => response.json())
    .then(data => this.props.displayWeatherForecast(data))
  }

  render() {
    const { payload } = this.state
    return (
      <div className="search-history">
      {this.loadSearchHistory()}
      </div>
    )
  }
}

export default AppContainer(Main);