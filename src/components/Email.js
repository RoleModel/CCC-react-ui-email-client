import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

class Email extends Component {

  renderButtons() {
    return (
      <div style={{float: 'right'}}>
        <button onClick={''}>Reply</button>
        <button onClick={this.props.deleteEmail.bind(null, this.props.email)}>Delete</button>
     </div>
    )
  }

  render() {
    const email = this.props.email
    return (
      <Swipeable onSwipedLeft={this.props.deleteEmail.bind(null, this.props.email)} className="email" onClick={this.props.toggleDisplay.bind(null, email)}>
        <span className="email-from">{email.from}</span>
        <span className="email-subject">{email.subject}</span>
        { this.props.isTouch ? null : this.renderButtons.bind(this)() }
        { email.isShown ? <p ref="content">{email.content}</p> : null }
      </Swipeable>
    );
  }
}

export default Email;

// "start": "npm run compile-sass && npm run background-sass-watcher && react-scripts start && kill $WATCH_SASS_PID",
