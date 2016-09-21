import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Swipeable from 'react-swipeable';
import FlatButton from 'material-ui/FlatButton';

class Email extends Component {

  renderButtons() {
    return (
      <div style={{float: 'right'}}>
        <FlatButton label="Reply" primary={true} />
        <FlatButton onClick={this.props.deleteEmail.bind(null, this.props.email)} label="Delete" />
     </div>
    )
  }

  render() {
    const email = this.props.email
    return (
      <div>
        <ListItem leftAvatar={<Avatar src={this.props.email.profile} />} onClick={this.props.toggleDisplay.bind(null, this.props.email)}>
          <Swipeable onSwipedLeft={this.props.deleteEmail.bind(null, this.props.email)} >
            <span className="email-from">{email.from}</span>
            <span className="email-subject">{email.subject}</span>
            { !this.props.isTouch ? this.renderButtons.bind(this)() : null }
            { email.isShown ? <p ref="content">{email.content}</p> : null }
          </Swipeable>
        </ListItem>
        <Divider />
      </div>
    )
  }
}

export default Email;
