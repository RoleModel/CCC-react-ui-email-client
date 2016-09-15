import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import './index.css';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
