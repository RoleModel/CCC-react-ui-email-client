import React, { Component } from 'react';
import emails from '../data/emails';
import EmailList from './EmailList';

class App extends Component {

  constructor() {
    super()
    this.state = {
      emails: emails.map(email => {
        email.isShown = false
        return email
      }),
      myEmail: 'myself@me.com'
    }
  }

  render() {
    return (
      <div className="App">
        <a href="#" className="compose-email">Compose</a>
        <EmailList setState={this.setState.bind(this)} emails={this.state.emails} myEmail={this.state.myEmail}/>
      </div>
    );
  }
}

export default App;
