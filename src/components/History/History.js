import React, { Component } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import AppContainer from '../../containers/AppContainer'




class History extends Component {
 

  loadSearchHistory(){
      if(this.props.history){
       return this.props.history.map(search => {
        return <Card payload={search} />
     })
    }
  }

  render() {
    return (
      <div className="search-history">
      {this.loadSearchHistory()}
      </div>
    )
  }
}

export default History;