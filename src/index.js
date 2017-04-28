import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import App from './App';
import './index.css';

import weather from './reducers/weather'
import history from './reducers/history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({weather, history}), 
    {   
        weather: {},
        history: {
          searchHistory: [],
        },
      },
    composeEnhancers(applyMiddleware(ReduxThunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
