import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavMenu from "components/global/navmenu"

import SentRequests from './requests-sent';
import ReceivedRequests from './requests-received';

import { getSentRequests, getRecievedRequests } from '../../api/requests';``

class RequestsWrap extends Component {
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
    const res = await getSentRequests();
    if (res.success) {
      const { data } = res.success;
      console.log('sent requests:', res);
      this.setState({ sent: data});
    }
  }
  getReceived = async () => {
    const res = await getRecievedRequests();
    if (res.success) {
      const { data } = res.success;
      console.log('received requests:', res);
      this.setState({ received: data});
    }
  }
  render() {
    const { location, sent, received } = this.state;
    return (
      <div className="sittings-page requests" style={{ backgroundColor: '#fff', height: '100vh' }}>

        <NavMenu history={this.props.history} />

        <div className="bar bar--tabs">
          <div className="container">
            <ul className="tabs__list">
              <li className={`tab ${location === "sent" ? "is--active" : ''}`} data-badge={`${sent.length}`}>
                <Link to="/requests/sent">My Requests</Link>
              </li>
              <li className={`tab ${location === "received" ? "is--active" : ''}`} data-badge={`${received.length}`}>
                <Link to="/requests/received">Received</Link>
              </li>
            </ul>
          </div>
        </div>

        {
          location === 'sent' ? <SentRequests sent={sent} /> : <ReceivedRequests received={received} />
        }

      </div>
    );
  }
}

export default withRouter(RequestsWrap);
