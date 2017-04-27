import React, { Component } from 'react';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import './App.css';
import AppContainer from './containers/AppContainer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/*<Header />*/}
        <Main />
        <p>Hello We are finally working.</p>
      </div>
    );
  }
}

export default AppContainer(App);
