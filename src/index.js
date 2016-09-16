import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import './index.css';

injectTapEventPlugin()

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
