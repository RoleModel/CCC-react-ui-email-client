import React, { Component } from 'react';
import emails from '../data/emails';
import Email from './Email'

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
        {this.state.emails.map((email, i) => <Email email={email} key={i}/>)}
      </div>
    );
  }
}

export default App;
