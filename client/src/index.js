import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore} from 'redux'
import './index.scss';
import App from './App';
import authenticator from './redux/reducer';

const store = createStore(authenticator)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);