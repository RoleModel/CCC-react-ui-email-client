import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ReactAtellier from 'react-atellier';
import App from './components/App';
import Email from './components/Email';
import './index.css';

const componentList = [{
  componentName : 'Email',
  component : Email,
  email: {from: 'asdf', content: 'asoidfoqbpibegiubeqrg'}
}];

var AtellierWrapper = React.createClass({
  render: function() {
    console.log('here')
    return (
      <ReactAtellier components={componentList} />
    );
  }
});

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/atellier" component={AtellierWrapper}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// <Route path="atellier" component={AtellierWrapper}/>
