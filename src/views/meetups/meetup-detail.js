import React from 'react';

const MeetupDetail = (props) => {
  return (
    <div>
      <h1>Meetup Detail Page goes here!</h1>
      <p>Meetup id: { props.match.params.id }</p>
    </div>
  );
};

export default MeetupDetail;
