import React, { Component } from 'react';

class Email extends Component {

  toggleDisplay() {
    this.setState({showEmail: !this.state.showEmail})
  }

  render() {
    const email = this.props.email
    return (
      <div className="email" onClick={this.props.toggleDisplay.bind(null, email)}>
        <span className="email-from">{email.from}</span>
        <span className="email-subject">{email.subject}</span>
        { email.isShown ? <p ref="content">{email.content}</p> : null }
      </div>
    );
  }
}

export default Email;

// "start": "npm run compile-sass && npm run background-sass-watcher && react-scripts start && kill $WATCH_SASS_PID",
