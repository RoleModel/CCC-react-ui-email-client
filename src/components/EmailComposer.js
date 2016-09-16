import React, { Component } from 'react';
import { FloatingActionButton, Dialog } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add';
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
