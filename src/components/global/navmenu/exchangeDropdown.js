import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as moment from 'moment';

import TinyDropdown from '../../wana-ui/dropdown/tiny-dropdown';

const ExchangeCtrAppt = props => {
  const placeholder = '../../../assets/img/def-avatar.png';
  const { data } = props || {};
  const { accepted_by, created_by, credits, start_time, end_time, type } = data || {};
  const start = moment(start_time).format("MMM D");
  const end = moment(end_time).format("MMM D, YYYY");
  const pointsSign = credits > 0 ? '+' : credits < 0 ? '-' : '';
  const pointsClassName = pointsSign === '+' ? 'positive' : pointsSign === '-' ? 'negative' : 'zero';
  const apptVerb = type === 'request' ? 'Requested' : 'Offered';
  const otherUserData = created_by.length > 0 ? created_by[0] : accepted_by[0];
  const otherUserName = otherUserData.first_name + ' ' + otherUserData.last_name;
  const avatar = otherUserData ? otherUserData.avatar ? otherUserData.avatar : placeholder : placeholder;

  const showDetail = () => {
    let status = props.data.created_by[0].id == props.data.pivot.user_id ? 'sent' : 'received';
    let type = props.data.type;
    let id = props.data.id;
    let url = '/' + status + '/' + type + '/' + id;
    location.href = url;
  }

  return (
    <li className="exc-ctr-appt" onClick={showDetail}>
      <div className="avatar avatar--s" style={{ backgroundImage:"url(" + avatar + ")"}}></div>
      <div className="appt-details">
        <p className="appt-dates">{ start } - { end }</p>
        <p className="appt-byline">{apptVerb} by: <span>{otherUserName}</span></p>
      </div>
      <div className={`appt-points ${pointsClassName}`}>
        <p>{pointsSign}{credits} Pnts</p>
      </div>
    </li>
  );
};

class ExchangeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };
  }
  toggleDropdown = () => {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }
  render() {
    const { auth } = this.props;
    const { userData } = auth || {};
    const { id, exchange_center } = userData || {};
    let transactions = [];
    if (exchange_center && exchange_center.length > 0) {
      exchange_center.map((appointment, i) => {
        transactions.push(<ExchangeCtrAppt key={i} data={appointment} />);
      });
    } else {
      transactions = <li className="no-transactions">Your family hasn't made any appointments yet.</li>
    }
    //transactions = <li className="no-transactions">Your family hasn't made any appointments yet.</li>

    return (
      <div className="exchange-dropdown-wrapper" onClick={this.toggleDropdown}>
        {this.props.children}
        <TinyDropdown className="exchange-dropdown" active={this.state.dropdownVisible} hideIcon={true}>
          <div className="exchange-dropdown-menu">
            <div className="exchange-dropdown-header">
              <span className="exchange-header-title">
                <svg className="link__icon icon-inbox-line"><use xlinkHref="#icon-inbox-line"/></svg>
                <h3>Exchange Center</h3>
              </span>
              <Link to={`/sent`} className="btn btn--primary btn--block">View Sent</Link>
            </div>
            <div className="exchange-dropdown-list">
              <ul className="exc-ctr-list">
                { transactions }
              </ul>
            </div>
          </div>
        </TinyDropdown>
      </div>
    );
  }
}

export default ExchangeDropdown;
