import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import reducers from './utilities/redux/reducers';

import './index.css';
import App from './pages/App/App';


ReactDOM.render(
  <React.StrictMode>
      <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
