import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

import { getUserUpcomingAppointments } from '../../api/sittings';

class ReceivedRequests extends Component {
  render() {
    const { received } = this.props;
    const emptyMarkup = (
      <EmptySittingsPlaceholder
        message="You don't have any requests right now"
        graphic={false}
        button={false} />
    );
    const completedReqs = received.filter(req => req.status === 6);
    const completedReqsMarkup = completedReqs.map((request, i) => (<RequestItem key={i} data={request} />));
    const pendingReqs = received.filter(req => req.status === 1);
    const pendingReqsMarkup = pendingReqs.map((request, i) => (<RequestItem key={i} data={request} />)) || [];
    const canceledReqs = received.filter(req => req.status === 5);
    const canceledReqsMarkup = canceledReqs.map((request, i) => (<RequestItem key={i} data={request} />));
    const declinedReqs = received.filter(req => req.status === 3);
    const declinedReqsMarkup = declinedReqs.map((request, i) => (<RequestItem key={i} data={request} />));
    const acceptedReqs = received.filter(req => req.status === 2);
    const acceptedReqsMarkup = acceptedReqs.map((request, i) => (<RequestItem key={i} data={request} />));
    const receivedRequestsMarkup = received.map((request, i) => (<RequestItem key={i} data={request} />));
    return (
      <div className="received-requests sittings-content">
        <ul className="sittings-list">

          { received.length === 0 && emptyMarkup }

          { completedReqs.length > 0 && <h3>Requests You've Completed</h3> }
          { completedReqs.length > 0 && completedReqsMarkup }

          { acceptedReqs.length > 0 && <h3>Requests You've Accepted</h3> }
          { acceptedReqs.length > 0 && acceptedReqsMarkup }

          { pendingReqs.length > 0 && <h3>Awaiting Your Reply</h3>}
          { pendingReqs.length > 0 && pendingReqsMarkup }

          { declinedReqs.length > 0 && <h3>Declined Requests</h3> }
          { declinedReqs.length > 0 && declinedReqsMarkup }

          { canceledReqs.length > 0 && <h3>Canceled Requests</h3> }
          { canceledReqs.length > 0 && canceledReqsMarkup }
        </ul>
      </div>
    );
  }
}

export default ReceivedRequests;

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

const RequestItem = ({ data }) => {
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
    if (status === 3) rightSideVerb = 'Declined';
    if (rightSideMarkup.length > 2) {
      rightSideTruncated = true;
      rightSideExtraCount = rightSideMarkup.length - 3;
      rightSideMarkup = rightSideMarkup.slice(0,3);
    }
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
          <p>{rightSideVerb} { status !== 3 && 'by:'}</p>
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
