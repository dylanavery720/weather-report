import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './App';

import './index.css';

import weather from './reducers/weather'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(weather)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndexContainer} />
        <Route path='/favorites' component={FavoritesContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
