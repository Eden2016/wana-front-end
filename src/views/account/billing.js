import React, { Component } from 'react';

import NavMenu from 'components/global/navmenu';
import Checkout from 'components/forms/checkout';
import Navigation from './navigation';
import AddCard from './add-card';

import { getUserPaymentMethods, createUserPaymentMethod, setUserDefaultPaymentMethod, removePaymentMethod } from 'api/settings-payment';

class AccountBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethods: [],
      showModal: false,
    }
  }

  async componentDidMount() {
    const res = await getUserPaymentMethods();
    if (res.success) {
      this.setState({ paymentMethods: res.success });
    }
  }

  triggerModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  createPayment = async (data) => {
    this.triggerModal();
    const res = await createUserPaymentMethod(data);
    if (res.success) {
      this.setState({ paymentMethods: [...this.state.paymentMethods, res.success] });
    }
  }

  removePayment = async (id) => {
    const res = await removePaymentMethod(id);
    if (res.success) {
      this.setState({ paymentMethods: this.state.paymentMethods.filter(payment => payment.id !== id) });
    }
  }

  setDefault = async (id) => {
    const res = await setUserDefaultPaymentMethod({ payment_method_token: id });
    if (res.success) {
      this.setState({ paymentMethods: this.state.paymentMethods.map(payment => {
          if (payment.id === id) {
            return Object.assign(payment, { default: true });
          }
          return Object.assign(payment, { default: false });
        })
      });
    }
  }

  render() {
    const { paymentMethods, showModal, } = this.state;
    return (
      <div style={{height: '100vh', background: 'whitesmoke'}}>
        <NavMenu history={this.props.history} />
        <div>
          <Navigation />
          <div className="content__section">
            <div className="section__head bar bar--l bar--panel -border-none">
              <div className="container wrapper">
                <div className="wrapper__inner">
                  <h1 className="-fontSize-l">Payment Methods</h1>
                </div>
                <div className="wrapper__inner -align-right">
                  {/*<button className="btn btn--primary" onClick={this.triggerModal}>Add New Card</button> */}
                  <Checkout />
                </div>
              </div>
            </div>
            <div className="page-tab__content">
              <div className="container container--s">
                <div className="card-table card-table--list card-table--list-tight">
                { showModal && <AddCard triggerModal={this.triggerModal} createPayment={this.createPayment} /> }
                {
                  paymentMethods.map((method, i) =>
                  <div className="payment-wrap" key={`${i} card`}>
                    <div onClick={() => this.setDefault(method.id)} className="card wrapper" style={{ borderLeft: method.default ? '3px solid #00BDCA' : '' }}>
                      <div className="wrapper__inner">
                        <div className="item item--cc">
                          <span className={`icon-cc is--${method.brand.toLowerCase()}`}></span>{`${method.brand} ending in ${method.last4}`}
                        </div>
                      </div>
                      <div className="wrapper__inner -align-right">
                        { `${method.exp_month}/${method.exp_year}` }
                      </div>
                    </div>
                    <button onClick={() => this.removePayment(method.id)} className="btn payment-remove-button">X</button>
                  </div>
                  )
                }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AccountBilling;
