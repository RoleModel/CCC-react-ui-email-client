import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import emails from '../data/emails';
import EmailList from './EmailList';
import EmailComposer from './EmailComposer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      emails: emails.map(email => {
        email.isShown = false
        return email
      }),
      myEmail: 'myself@me.com',
      modalIsOpen: false,
      isTouch: true
    }
  }

  toggleTouch(event) {
    this.setState({isTouch: !this.state.isTouch})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <EmailComposer setState={this.setState.bind(this)} modalIsOpen={this.state.modalIsOpen}/>
          <EmailList setState={this.setState.bind(this)} emails={this.state.emails} myEmail={this.state.myEmail} isTouch={this.state.isTouch}/>
          <button onClick={this.toggleTouch.bind(this)}>Toggle touch</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
