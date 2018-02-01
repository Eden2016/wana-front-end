import React, { Component } from 'react';
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
import LoginForm from 'components/forms/Login/no-modal';
import { Control, Form, Errors, actions } from 'react-redux-form';
import {
  isRequired,
  isEmail,
  isZip,
  passwordLongEnough,
  passwordsMatch
} from '../../utils/validators';


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
class Login extends Component {
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
        history.push('/signup/complete');
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
    // TODO - actually handle fb auth response.
    console.log('facebook response: ', res);
    const { dispatch, signupType } = this.props;
    dispatch(setSignUpType('fb'));
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
              <h1 className="margin--s no--margin-t no--margin-lr">Welcome Back!</h1>
              <h2 className="-fontSize-l">Find babysitters you know and trust, for FREE!</h2>
            </div>
          </div>
        </aside>

        <section className="content wrapper">
          <div className="wrapper__inner">
            <div className="container container--s">

              <LoginForm
                auth={this.props.auth}
                loginUser={this.loginUser}
                history={this.props.history}
                showModal={this.state.showModal}
                toggleModal={this.toggleModal}
                takeToSignUpForm={this.takeToSignUpForm} />

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
