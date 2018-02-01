import React, { Component } from 'react';
import CreditCard from 'react-creditcard';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCardData: {
        number: '',
        cvc: '',
        expires: '',
      },
      focused: 'number',
    }
  }

  handleNumberChange = (e) => {
    const { value, name } = e.target;
    const lastChar = +value.slice(-1);
    if (Number.isInteger(lastChar) && value.length <= 16) {
      this.setState({ newCardData: Object.assign(this.state.newCardData, { number: value }), focused: name });
    }
  }

  handleCvcChange = (e) => {
    const { value, name } = e.target;
    const lastChar = +value.slice(-1);
    if (Number.isInteger(lastChar) && value.length <= 3) {
      this.setState({ newCardData: Object.assign(this.state.newCardData, { cvc: value }), focused: name });
    }
  }

  handleExpiresChange = (e) => {
    const { value, name } = e.target;
    if (value.length > 5) return;
    const newVal = value
    .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
    .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
    .replace(/^1([3-9])$/g, '01/$1')
    .replace(/^0\/|0+$/g, '0')
    .replace(/[^\d|^\/]*/g, '')
    .replace(/\/\//g, '/');
    this.setState({ newCardData: Object.assign(this.state.newCardData, { expires: newVal }), focused: name });
  }

  render() {
    const { newCardData, focused } = this.state;
    return (
      <div>
        <div className="modal-background" onClick={this.props.triggerModal}></div>
        <div className="modal card-modal">
          <CreditCard
            number={newCardData.number}
            cvc={newCardData.cvc}
            expiry={newCardData.expires.replace('/', '')}
            focused={focused}
            backDescriptionText="Use of this card is governed by the conditions of use. You must not disclose your PIN to anyone."
          />
          <input name="number" value={newCardData.number} placeholder="Card number" onChange={this.handleNumberChange}/>
          <input name="expire" value={newCardData.expires} onChange={this.handleExpiresChange} placeholder="Expires" />
          <input name="cvc" value={newCardData.cvc} placeholder="cvc" onChange={this.handleCvcChange} />
          <button className="card-button" onClick={this.props.triggerModal}>Add</button>
        </div>
      </div>
    )
  }
}

export default AddCard;
