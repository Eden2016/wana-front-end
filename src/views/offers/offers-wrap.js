import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavMenu from "components/global/navmenu"

import SentOffers from './offers-sent';
import ReceivedOffers from './offers-received';

import { getSentOffers, getRecievedOffers } from '../../api/offers';``

class OffersWrap extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location.pathname.split('/');
    this.state = {
      location: location[location.length - 1],
      sent: [],
      received: []
    };
  }
  componentWillUpdate(nextProps) {
    const loc = nextProps.location.pathname.split('/');
    const { location } = this.state;
    if (location !== loc[loc.length - 1]) {
      this.setState({ location: loc[loc.length - 1] });
    }
  }
  componentDidMount() {
    this.getSent();
    this.getReceived();
  }
  getSent = async () => {
    const res = await getSentOffers();
    if (res.success) {
      const { data } = res.success;
      console.log('sent offers:', res);
      this.setState({ sent: data});
    }
  }
  getReceived = async () => {
    const res = await getRecievedOffers();
    if (res.success) {
      const { data } = res.success;
      console.log('received offers:', res);
      this.setState({ received: data});
    }
  }
  render() {
    const { location, sent, received } = this.state;
    return (
      <div className="sittings-page offers" style={{ backgroundColor: '#fff' }}>

        <NavMenu history={this.props.history} />

        <div className="bar bar--tabs">
          <div className="container">
            <ul className="tabs__list">
              <li className={`tab ${location === "sent" ? "is--active" : ''}`} data-badge={`${sent.length}`}>
                <Link to="/offers/sent">My Offers</Link>
              </li>
              <li className={`tab ${location === "received" ? "is--active" : ''}`} data-badge={`${received.length}`}>
                <Link to="/offers/received">Received</Link>
              </li>
            </ul>
          </div>
        </div>

        {
          location === 'sent' ? <SentOffers sent={sent} /> : <ReceivedOffers received={received} />
        }

      </div>
    );
  }
}

export default withRouter(OffersWrap);
