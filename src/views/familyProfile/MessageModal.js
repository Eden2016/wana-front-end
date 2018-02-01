import React, { Component } from 'react';
import { connect } from 'react-router';
import Modal from 'react-modal';
import './MessageModal.scss';

import { sendMessage } from 'api/messages';

class MessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    const { family } = this.props || {};
    if (!family) return null;
    console.log('FAMILY:', family)
    return (
      <Modal
        className="modal modal-action"
        overlayClassName="modal-overlay modal-action"
        isOpen={this.props.showModal}
        { ...this.props }
      >
        <h1>Message to { family.name }</h1>
        <div>
          <textarea className="message-modal-input" onChange={this.handleOnChange}>{ this.state.message }</textarea>
        </div>
        <div>
          <button className="btn btn--l btn--primary btn--block" onClick={() => this.props.handleMessageSend(this.state.message)}>
            Send Message
          </button>
        </div>
      </Modal>
    )
  }
}

export default MessageModal;
