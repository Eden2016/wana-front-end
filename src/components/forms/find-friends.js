import React from 'react';
import ReactDOM from 'react-dom';
import { fbAppId } from '../../config/config';
import FacebookLogin from 'react-facebook-login';
import { connectToFacebook } from '../../api/settings';

const responseFacebook = async (response) => {
  console.log('facebook account connect handler dummy response',response);
  // const res = await connectToFacebook();
  // if (res.success) {
  //   const { data } = res.success;
  //   navToStep(4, { markPrevAsComplete: true });
  // }
  navToStep(4, { markPrevAsComplete: true });
}

export const FindFriendsForm = props => {
  const { navToStep, onComplete } = props;
  return (
    <div>
      <p>You can find friends already on Wana by connecting your Facebook account!</p>
        <FacebookLogin
          appId={fbAppId}
          autoLoad={false}
          fields="name,email,picture"
          cssClass="btn btn--l btn--facebook btn--block icon--left"
          icon="fa-facebook-official"
          textButton="Continue With Facebook"
          callback={responseFacebook}
        />
      <button onClick={() => navToStep(4, { markPrevAsComplete: true })} className="btn btn--outline btn--tertiary btn--s btn--block margin--xs no--margin-lr no--margin-b">
        No thanks, I'll do this later.
      </button>
    </div>
  );
};
