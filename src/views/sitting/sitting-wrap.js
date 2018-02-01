import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavMenu from "components/global/navmenu"

import UpcomingSittings from './upcoming';
import CompleteSittings from './complete';

import { getUserUpcomingAppointments, getSittingsByStatus } from '../../api/sittings';

class SittingWrap extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location.pathname.split('/');
    this.state = {
      location: location[location.length - 1],
      sit: null,
      upcoming: {
        mySits: [],
        theirSits: [],
      },
      complete: {
        complete: [],
        pending: [],
      }
    }
  }

  componentWillUpdate(nextProps) {
    const loc = nextProps.location.pathname.split('/');
    const { location } = this.state;
    if (location !== loc[loc.length - 1]) {
      this.setState({ location: loc[loc.length - 1] });
    }
  }

  getUpcoming = async () => {
    const res = await getSittingsByStatus('accepted');
    if (res.success) {
      const { data } = res.success;
      this.setState({ upcoming: { mySits: data.filter(sit => sit.type === 'request'), theirSits: data.filter(sit => sit.type === 'offer') } });
    }
  }

  getPending = async () => {
    const res = await getSittingsByStatus('active');
    if (res.success) {
      this.setState({ complete: Object.assign(this.state.complete, { pending: res.success.data }) });
    }
  }

  componentDidMount() {
    this.getUpcoming();
    this.getPast();
    this.getPending();
  }

  getPast = async () => {
    const res = await getSittingsByStatus('complete');
    if (res.success) {
      this.setState({ complete: Object.assign(this.state.complete, { complete: res.success.data }) });
    }
  }

  render() {
    const { location, upcoming, complete } = this.state;
    return (
      <div style={{ backgroundColor: '#fff' }}>
        <NavMenu history={this.props.history} />
        <div className="bar bar--tabs">
          <div className="container">
            <ul className="tabs__list">
              <li className={`tab ${location === "upcoming" ? "is--active" : ''}`} data-badge={`${upcoming.mySits.length}`}>
                <Link to="/sitting/upcoming">Upcoming</Link>
              </li>
              <li className={`tab ${location === "complete" ? "is--active" : ''}`} data-badge={`${complete.pending.length}`}>
                <Link to="/sitting/complete">Awaiting Completion</Link>
              </li>
            </ul>
          </div>
        </div>

        {
          location === 'upcoming' ? <UpcomingSittings upcoming={upcoming} /> : <CompleteSittings complete={complete.complete} pending={complete.pending} />
        }

      </div>
    )
  }
}

export default withRouter(SittingWrap);
