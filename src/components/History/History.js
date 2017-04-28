import React, { Component } from 'react'
import Button from '../Button/Button'
import AppContainer from '../../containers/AppContainer'
import loadCards from '../../helpers/loadCards'




class History extends Component {
 
  render() {
    return (
      <div className="search-history">
      {loadCards(this.props.history)}
      </div>
    )
  }
}

export default History;