import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

import { getUserUpcomingAppointments } from '../../api/sittings';

class SentOffers extends Component {
  render() {
    const { sent } = this.props;
    const emptyMarkup = (
      <EmptySittingsPlaceholder
        message="You haven't sent any sitting offers yet!"
        graphic={false}
        button={true}
        buttonMsg="Be a sitter"
        buttonUrl="/" />
    );
    const completedOffers = sent.filter(req => req.status === 6);
    const completedOffersMarkup = completedOffers.map((offer, i) => (<OfferItem key={i} data={offer} />));
    const pendingOffers = sent.filter(req => req.status === 1);
    const pendingOffersMarkup = pendingOffers.map((offer, i) => (<OfferItem key={i} data={offer} />));
    const canceledOffers = sent.filter(req => req.status === 5);
    const canceledOffersMarkup = canceledOffers.map((offer, i) => (<OfferItem key={i} data={offer} />));
    const declinedOffers = sent.filter(req => req.status === 3);
    const declinedOffersMarkup = declinedOffers.map((offer, i) => (<OfferItem key={i} data={offer} />));
    const acceptedOffers = sent.filter(req => req.status === 2);
    const acceptedOffersMarkup = acceptedOffers.map((offer, i) => (<OfferItem key={i} data={offer} />));
    const sentOffersMarkup = sent.map((offer, i) => (<OfferItem key={i} data={offer} />));
    return (
      <div className="sent-offers sittings-content">
        <ul className="sittings-list">

          { sent.length === 0 && emptyMarkup }

          { completedOffers.length > 0 && <h3>Your Completed Offers</h3> }
          { completedOffers.length > 0 && completedOffersMarkup }

          { acceptedOffers.length > 0 && <h3>Your Accepted Offers</h3> }
          { acceptedOffers.length > 0 && acceptedOffersMarkup }

          { pendingOffers.length > 0 && <h3>Your Pending Offers</h3>}
          { pendingOffers.length > 0 && pendingOffersMarkup }

          { declinedOffers.length > 0 && <h3>Your Declined Offers</h3> }
          { declinedOffers.length > 0 && declinedOffersMarkup }

          { canceledOffers.length > 0 && <h3>Your Canceled Offers</h3> }
          { canceledOffers.length > 0 && canceledOffersMarkup }
        </ul>
      </div>
    );
  }
}

export default SentOffers;

const EmptySittingsPlaceholder = props => {
  const { message, graphic, graphicUrl, button, buttonMsg, buttonUrl } = props;
  const defaultGraphicUrl = 'https://placehold.it/200x200';
  return (
    <div className="empty-sittings-placeholder">
      <div className="content">
        { graphic && <img src={graphicUrl ? graphicUrl : defaultGraphicUrl } /> }
        { message && <p>{message}</p> }
        { button && <Link className="btn btn--primary btn--block" to={buttonUrl || '/'}>{buttonMsg}</Link> }
      </div>
    </div>
  );
};

const OfferItem = ({ data }) => {
  let displaySingleDate = false;
  const { id, start_time, end_time, accepted_by, created_by, duration, credits, status } = data || {};
  const startDate = moment(start_time).format("MMM D");
  const startMonth = moment(start_time).format("MMM");
  const startDay = moment(start_time).format("D");
  const endDate = moment(end_time).format("MMM D");
  const endMonth = moment(end_time).format("MMM");
  const endDay = moment(end_time).format("D");
  if (endDate === startDate) displaySingleDate = true;
  const pointsSign = credits > 0 ? '+' : credits < 0 ? '-' : '';
  const pointsClassName = pointsSign === '+' ? 'positive' : pointsSign === '-' ? 'negative' : 'zero';
  // TODO - figure out where to get the other avatars from based on status
  let avatarMarkup;
  let rightSideMarkup;
  let rightSideTruncated = false;
  let rightSideExtraCount;
  let rightSideVerb;
  if (status > 1 && status < 7) {
    avatarMarkup = accepted_by.map((acceptee, i) => (<AvatarCircle url={acceptee.avatar} />));
    rightSideMarkup = accepted_by.map((acceptee, i) => (<NameTag data={acceptee} />));
    rightSideVerb = 'Accepted';
    if (rightSideMarkup.length > 2) {
      rightSideTruncated = true;
      rightSideExtraCount = rightSideMarkup.length - 3;
      rightSideMarkup = rightSideMarkup.slice(0,3);
    }
  } else if (status === 1) {
    avatarMarkup = accepted_by.map((acceptee, i) => (<AvatarCircle url={acceptee.avatar} />));
    rightSideMarkup = accepted_by.map((acceptee, i) => (<NameTag data={acceptee} />));
    rightSideVerb = 'Offered';
  } else {
    avatarMarkup = <p>{status} status not supported</p>;
  }
  return (
    <Link to={`/sent/request/${id}`}>
      <li className="sittings-list-item">
        <div className="left-side">
          <DateDisplayBox month={startMonth} day={startDay} />
          { !displaySingleDate && <p className="two-date-spacer">→</p> }
          { !displaySingleDate && <DateDisplayBox month={endMonth} day={endDay}/> }
          { avatarMarkup }
          <div className="duration"><p>{duration} hrs</p></div>
          <div className={`appt-points ${pointsClassName}`}>
            <p>{pointsSign}{credits} Pnts</p>
          </div>
        </div>
        <div className="right-side">
          <p>{rightSideVerb} to: </p>
          <ul>{ rightSideMarkup }</ul>
          {rightSideTruncated && <p>+ {rightSideExtraCount} More</p>}
        </div>
      </li>
    </Link>
  );
};

const DateDisplayBox = ({ month, day }) => {
  return (
    <div className="date-display-box">
      <p className="month">{month}</p>
      <p className="day">{day}</p>
    </div>
  );
};

const AvatarCircle = ({ url }) => (
  <div className="avatar avatar--s" style={{ backgroundImage: `url(${url})`}}></div>
);

const NameTag = ({ data }) => {
  const { first_name, last_name } = data || {};
  return <li className="name-tag">{first_name} {last_name.substring(0,1)}</li>;
}
