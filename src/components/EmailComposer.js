import React, { Component } from 'react';
import { RaisedButton } from 'material-ui'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

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
        <RaisedButton onClick={this.openModal.bind(this)} label="Compose"/>
        <Modal isOpen={this.props.modalIsOpen}
               onRequestClose={this.closeModal.bind(this)}
               style={customStyles}>
          <h2>Composer</h2>
          <textarea className="composer-text">

          </textarea>
        </Modal>
      </div>
    )
  }
}

export default EmailComposer;
