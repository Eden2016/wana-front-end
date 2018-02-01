import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const location = this.props.location.pathname.split('/')[2];
    return (
      <div className="bar bar--tabs">
        <div className="container">
          <ul className="tabs__list">
            <li className={`tab ${location === 'settings' ? 'is--active' : ''}`}>
              <Link to="/account">Account</Link>
            </li>
            <li className={`tab ${location === 'transactions' ? 'is--active' : ''}`}>
              <Link to="/account/transactions">Transactions</Link>
            </li>
            <li className={`tab ${location === 'billing' ? 'is--active' : ''}`}>
              <Link to="/account/billing">Billing</Link>
            </li>
            <li className={`tab ${location === 'email-prefs' ? 'is--active' : ''}`}>
              <Link to="/account/email-prefs">Email Preferences</Link>
            </li>
            <li className={`tab ${location === 'privacy-settings' ? 'is--active' : ''}`}>
                <Link to="/account/privacy-settings">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);
