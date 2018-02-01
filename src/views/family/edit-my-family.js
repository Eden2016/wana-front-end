import React from 'react';
import NavMenu from "components/global/navmenu"

const EditMyFamily = (props) => {
  return (
    <div>
      <NavMenu history={props.history} />
      <div style={{width: '100%', height: '100vh', backgroundColor: 'whitesmoke'}}>
        <h1>Edit User's Family Page goes here!</h1>
      </div>
    </div>
  );
};

export default EditMyFamily;
