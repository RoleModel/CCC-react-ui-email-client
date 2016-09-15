import React, { Component } from 'react';

class Email extends Component {

  render() {
    const email = this.props.email
    return (
      <div className="email">
        <p>{email.from}</p>
        <p>{email.content}</p>
      </div>
    );
  }
}

export default Email;
