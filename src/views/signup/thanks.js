import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupThanks extends Component {
  render() {
    return (
      <div style={{height: 100 +'%' }}>

        <div className="section__head banner banner--empty -align-center -reversed banner--m no--pad" style={{height: 100 +'%' }}>
          <div className="wrapper">
            <div className="wrapper__inner">
              <h1 className="heading -fontSize-xx">Welcome to Wana!</h1>
              <h2 className="-fontSize-l" style={{maxWidth: 640 + 'px', margin: '0 auto', width: 90 + '%'}}>You've successfully created your account, but the community isn't <em>quite</em> ready. In the meantime, take our survey and get 10 bonus points for FREE babysitting. Then hang tight. We will email you shortly with more to try. <strong>Your Wana community is on its way!</strong></h2>
              <hr className="divider"/>
              <a className="btn btn--l btn--reversed" style={{textShadow: 'none'}} href="https://goo.gl/forms/QUSlKtlfqosLrvd92" target="_blank">Take the Survey</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SignupThanks;
