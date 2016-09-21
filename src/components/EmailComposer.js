import React, { Component } from 'react';
import { FloatingActionButton, Dialog, TextField, RaisedButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const buttonStyles = {
  bottom: '20px',
  position: 'fixed',
  right: '20px',
  zIndex: 20
};

class EmailComposer extends Component {
  openModal() {
    this.props.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="modal-wrapper">
        <FloatingActionButton style={buttonStyles} onClick={this.openModal.bind(this)} label="Compose">
          <ContentAdd />
        </FloatingActionButton>
        <Dialog title="Email Composer" open={this.props.modalIsOpen} onRequestClose={this.closeModal.bind(this)}>
          <TextField
            hintText="Type your message"
            multiLine={true}
            fullWidth={true} />
          <RaisedButton label="Send" primary={true} style={{float: "right"}} />
        </Dialog>
      </div>
    )
  }
}

export default EmailComposer;
