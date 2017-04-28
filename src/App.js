import React, { Component } from 'react';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import History from './components/History/History'
import './App.css';
import AppContainer from './containers/AppContainer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {this.props.history && <History history={this.props.history} />}
      </div>
    );
  }
}

export default AppContainer(App);
