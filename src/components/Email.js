import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Swipeable from 'react-swipeable';

class Email extends Component {

  renderEmail() {
    const email = this.props.email
    return (
      <div className="email">
        <span className="email-from">{email.from}</span>
        <span className="email-subject">{email.subject}</span>
        { !this.props.isTouch ? this.renderButtons.bind(this)() : null }
        { email.isShown ? <p ref="content">{email.content}</p> : null }
      </div>
    )
  }

  renderTouch() {
    return (
      <div>
        <ListItem leftAvatar={<Avatar src={this.props.email.profile} />} onClick={this.props.toggleDisplay.bind(null, this.props.email)}>
          <Swipeable onSwipedLeft={this.props.deleteEmail.bind(null, this.props.email)} >
            {this.renderEmail.bind(this)()}
          </Swipeable>
        </ListItem>
        <Divider />
      </div>
    )
  }

  renderButtons() {
    return (
      <div style={{float: 'right'}}>
        <button onClick={''}>Reply</button>
        <button onClick={this.props.deleteEmail.bind(null, this.props.email)}>Delete</button>
     </div>
    )
  }

  render() {
    if(this.props.isTouch) {
      return this.renderTouch.bind(this)()
    } else {
      return this.renderEmail.bind(this)()
    }
  }
}

export default Email;

// "start": "npm run compile-sass && npm run background-sass-watcher && react-scripts start && kill $WATCH_SASS_PID",
