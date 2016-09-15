import React, { Component } from 'react';
import emails from '../data/emails';

class App extends Component {

  constructor() {
    super()
    this.state = {
      emails: emails
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
