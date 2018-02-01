import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fbAppId } from '../../../config/config';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { Link, Route } from 'react-router-dom'
import InputFormField from '../../wana-ui/input';
import FacebookLogin from 'react-facebook-login';
import cookie from 'react-cookies';
import { loginAsync, loginAsyncFacebook } from 'actions/auth';

@connect(state => ({
  loginModel: state.login.get('loginModel'),
  loginStatus: state.login.get('loginStatus'),
}))
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('login modal newProps', this.props)
    const { history, auth } = this.props;
    const { isAuthenticated, inProgress, loginError } = auth || {};

    if(isAuthenticated && !inProgress && !loginError) {
      console.log('passed auth check, should nav back to home');
      history.push('/');
    }
  }

  loginUser = () => {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    const credentials = { email, password };
    console.log('credentials to login', credentials)
    dispatch(loginAsync(credentials));
  };

  updateValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  takeToSignUpForm = () => {
    const { history } = this.props;
    history.push('/signup');
  };

  responseFacebook = (response) => {
    console.log(response);
    const { email, userID, accessToken } = response;
    const { dispatch } = this.props;
    const formattedResponse = {
      email, userID, accessToken
    };
    dispatch(loginAsyncFacebook(formattedResponse));
  };
  render() {
    return (
      <div className="modal-content main">
        <FacebookLogin
          appId={fbAppId}
          autoLoad={false}
          fields="name,email,picture"
          cssClass="btn btn--l btn--facebook btn--block icon--left"
          icon="fa-facebook-official"
          textButton="Continue With Facebook"
          scope="public_profile"
          callback={this.responseFacebook}
          scope="public_profile,email,user_birthday,user_friends"
        />
        <br/>
        <h4 className="hbars -align-center full-width">
          <span></span>
            or
          <span></span>
        </h4>
        <br/>
        <div className="well no--pad">
          {!!this.props.loginError && <h2 style={{color: 'red'}}> {this.props.loginError} </h2>}
          <div className="well__row">
              <div className="well__section">
                <InputFormField
                  name="email"
                  type="text"
                  placeholder={'Email Address'}
                  label
                  value={this.state.email}
                  onChange={this.updateValue}
                  labelValue="Email Address"
                />
              </div>
          </div>
          <div className="well__row">
              <div className="well__section">
                <InputFormField
                  name="password"
                  type="password"
                  placeholder={'Password'}
                  value={this.state.password}
                  label
                  onChange={this.updateValue}
                  labelValue="Password"
                />
              </div>
          </div>
          <div className="well__row">
            <div className="well__section">
              <button onClick={this.loginUser} className="btn btn--primary btn--block">LOG IN</button>
            </div>
          </div>
        </div>
        <p className="-align-center"><a href="#">FORGOT YOUR PASSWORD?</a></p>
        <br/>
        <p className="-align-center">Don't have an account yet?</p>
        <div className="well__row">
          <div className="well__section">
            <Link className="btn btn--primary btn--block" to="/signup">SIGN UP</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Login);
