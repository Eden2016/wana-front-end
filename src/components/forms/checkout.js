import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  onToken = (token) => {
    console.log(token);
  }

  render() {
    const { amount = 0, onToken = this.onToken, currency = 'USD' } = this.props;

    return (
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_HYL2oWDjv88TbW8LnESiklAA"
        amount={amount}
        currency={currency}
      >
        <button className="btn btn--primary">Pay with card</button>
      </StripeCheckout>
    )
  }
}

export default Checkout;
