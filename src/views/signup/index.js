import React, { Component } from 'react';
import { fbAppId } from '../../config/config';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import NavMenu from 'components/global/navmenu';
import { signUpAsync } from 'actions/app';
import { setSignUpType, setSignUpData } from 'actions/login';
import InputFormField from 'components/wana-ui/input';
import FacebookLogin from 'react-facebook-login';
import { loginAsync } from 'actions/auth';
import LoginModal from 'components/forms/Login';
import { Control, Form, Errors, actions } from 'react-redux-form';
import {
  isRequired,
  isEmail,
  isZip,
  passwordLongEnough,
  passwordsMatch
} from '../../utils/validators';
import { signUpAsyncFacebook } from '../../actions/app';


const onSignUpButtonClick = (e) => {
  const cards = document.getElementsByClassName('card__body');
  cards[0].style = cards[1].style = "height:auto; margin: 20px;";
};

const signupValidation = {
  '': { passwordsMatch },
  first_name: { isRequired },
  last_name: { isRequired },
  email: { isRequired, isEmail },
  zip_code: { isRequired, isZip },
  password: { isRequired, passwordLongEnough },
  password_confirmation: { isRequired, passwordLongEnough },
  isOver18: { isChecked: (val) => val ? true : false }
};

@connect(state => ({
  signupResults: state.app.get('asyncSignupData'),
  signupType: state.login.get('signupType'),
  auth: state.auth
}))
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      zip: '',
      email: '',
      password: '',
      password_confirmation: '',
      showModal: false
    };
    this.handleFacebook = this.handleFacebook.bind(this);
    this.takeToSignUpDetailsForm = this.takeToSignUpDetailsForm.bind(this);
  }
  componentWillReceiveProps(newProps) {
    // If signup was without error, nav to signup complete page
    const { signupResults, history, auth } = newProps;
    if (signupResults) {
      const { errors, success } = signupResults;
      if (!errors && success) {
        history.push('/');
      } else if (errors) {
        Object.keys(errors).forEach( key => {
          const error = errors[key];
          console.log('serverside error found: ', error)
          if (key === 'email') {
            newProps.dispatch(actions.setErrors(
              "signup", `Email address is already taken. Please choose a different email`
            ));
          }
        });
      } else {
        console.log('unexpected response from signup API', signupResults);
      }
    }
  }
  handleFacebook = (res) => {
    const { dispatch, signupType } = this.props;
    const { name, accessToken, email, userID, picture } = res || {};
    const signupData = {
      accessToken,
      email,
      userID
    };
    const formattedResponse = { ...signupData, email, name, picture };
    dispatch(setSignUpType('fb'));
    dispatch(setSignUpData(formattedResponse));
    dispatch(signUpAsyncFacebook(formattedResponse))
  }
  takeToSignUpDetailsForm = (formData) => {
    console.log('Signup Submit fired', formData)
    const { first_name, last_name, email, password, password_confirmation, zip_code } = formData;
    const { dispatch, history } = this.props;
    let data = {
      first_name,
      last_name,
      email,
      zip_code,
      birth_date: '',
      password,
      password_confirmation
    };

    dispatch(setSignUpData(data));
    dispatch(signUpAsync(data));
  };

  takeToSignUpForm = () => {
    const { history } = this.props;
    history.push('/signup');
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  changeValue = (name, value) => {
    const { dispatch } = this.props;
    dispatch(changeValue(name, value));
  };

  loginUser = (data) => {
    const { dispatch } = this.props;
    dispatch(loginAsync(data));
  }

  render() {
    const { props } = this;
    const { first_name, last_name, birth_date, email, password, password_confirmation, showModal } = this.props;
    const validateStatus = !first_name || last_name || birth_date || !email || !password || !password_confirmation ;
    return (
      <div className="signup-wrapper split split--40-60 wrapper -bg-light-gray">
        <aside className="sidebar sidebar--banner -reversed -align-center" style={{backgroundImage:"url('/assets/img/banner-signup-2.jpg')"}}>
          <div className="wrapper">
            <div className="sidebar__content wrapper__inner">
              <a className="logo logo--l" href="/">
                <img src="/assets/img/logo-wana-reverse.svg" alt="Wana Family Network"/>
              </a>
              <hr />
              <h1 className="margin--s no--margin-t no--margin-lr">Join Us Today!</h1>
              <h2 className="-fontSize-l">Find babysitters you know and trust, for FREE!</h2>
            </div>
          </div>
        </aside>

        <section className="content wrapper">
          <div className="wrapper__inner">
            <div className="container container--s">

              <FacebookLogin
                appId={fbAppId}
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,email"
                cssClass="btn btn--l btn--facebook btn--block icon--left"
                icon="fa-facebook-official"
                textButton="Continue With Facebook"
                callback={this.handleFacebook}
              />

              <hr className="hairline"/>

              <div className="card card--accordion">
                <div className="card__head wrapper" onClick={onSignUpButtonClick}>
                  <div className="wrapper__inner">
                    <span className="ts--label">Sign Up With Email</span>
                  </div>
                </div>

                <Form model="signup" validators={signupValidation} onSubmit={this.takeToSignUpDetailsForm}>
                  <div className="card__body card__body--row">
                    <label className="input input--text">
                      <span className="label">First Name</span>
                      <Control.text className="input__field" model=".first_name" placeholder={'First Name'}/>
                      <Errors
                        className="errors"
                        model=".first_name"
                        show="touched"
                        messages={{ isRequired: 'First Name is required' }} />
                    </label>

                    <label className="input input--text">
                      <span className="label">Last Name</span>
                      <Control.text className="input__field" model=".last_name" placeholder={'Last Name'}/>
                      <Errors
                        className="errors"
                        model=".last_name"
                        show="touched"
                        messages={{ isRequired: 'Last Name is required' }} />
                    </label>

                    <label className="input input--text">
                      <span className="label">Email Address</span>
                      <Control.text className="input__field" model=".email" placeholder={'Email Address'}/>
                      <Errors
                        className="errors"
                        model=".email"
                        show="touched"
                        messages={{ isRequired: 'Email Address is required', isEmail: 'Please enter a valid email address' }} />
                    </label>
                    <label className="input input--text">
                      <span className="label">Zip Code</span>
                      <Control.text className="input__field" model=".zip_code" placeholder={'Zip Code'}/>
                      <Errors
                        className="errors"
                        model=".zip_code"
                        show="touched"
                        messages={{ isZip: 'Please enter a valid Zip Code', isRequired: 'Please enter a valid Zip Code' }} />
                    </label>
                    <label className="input input--text">
                      <span className="label">Create Password</span>
                      <Control.text className="input__field" model=".password" type="password" placeholder={'Create Password'}/>
                      <Errors
                        className="errors"
                        model=".password"
                        show="touched"
                        messages={{ isRequired: 'Please enter your desired password.', passwordLongEnough: 'Passwords must be at least 8 characters long.' }} />
                    </label>
                    <label className="input input--text">
                      <Control.text className="input__field" model=".password_confirmation" type="password" placeholder={'Type password again'}/>
                      <small>Passwords must be at least 8 characters and are case sensitive.</small>
                      <Errors
                        className="errors"
                        model=".password_confirmation"
                        show="touched"
                        messages={{ isRequired: 'Please confirm your password.', passwordsMatch: 'Confirmation does not match password.' }} />
                    </label>
                    <div className="well__row">
                      <div className="well__section is-halved -border-none">
                        <label className="input input--checkbox">
                          <Control.checkbox className="checkbox--control" model=".isOver18" type="checkbox"/>
                          <span className="checkbox--label">
                            I am over 18 and accept the <a href="http://wanafam.ly/terms/" target="_blank">terms of use</a>
                          </span>
                        </label>
                        <Errors
                          className="errors"
                          model=".isOver18"
                          show="touched"
                          messages={{ isChecked: 'Please confirm you are over 18 and agree to our terms of service.' }} />
                      </div>
                    </div>
                  </div>
                  <div className="card__body card__body--row">
                    <Errors
                      className="errors"
                      model="signup"
                      show="touched"
                      messages={{ passwordsMatch: 'Password does not match password confirmation.' }} />
                    <button type="submit" className="btn btn--secondary btn--block">Continue</button>
                  </div>
                </Form>
              </div>

              <div className="wrapper -align-right">
                <div className="wrapper__inner">
                  Already have an account? <a className="link link--primary" onClick={this.toggleModal}>Log In</a>
              </div>
            </div>

            </div>
          </div>
        </section>
        <LoginModal
          auth={this.props.auth}
          loginUser={this.loginUser}
          history={this.props.history}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          takeToSignUpForm={this.takeToSignUpForm}
        />
      </div>
    );
  }
}

export default Signup;
