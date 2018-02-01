import React from 'react';
import NavMenu from "components/global/navmenu"

const Family = (props) => {
  return (
    <div>
      <NavMenu history={props.history} />
      <div style={{width: '100%', height: '100vh', backgroundColor: 'whitesmoke'}}>
        <h1>Family Page goes here!</h1>
        <p>Family id: { props.match.params.id }</p>
        <p>Modal to show: { props.match.params.modal ? props.match.params.modal : 'None' }</p>
      </div>
    </div>
  );
};

export default Family;
