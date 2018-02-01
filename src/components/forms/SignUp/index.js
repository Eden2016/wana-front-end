import React, { Component } from 'react';
import { fbAppId } from '../../../config/config';
import { connect } from 'react-redux';
import InputFormField from 'components/wana-ui/input';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

class SignUp extends Component {

  takeToSignUpDetailsForm = () => {
    const { firstName, lastName, birthDate, email, createPassword, confirmPassword } = this.state;

    this.props.setSignUpData({
      firstName,
      lastName,
      birthDate,
      email,
      createPassword,
      confirmPassword
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      createPassword: '',
      confirmPassword: ''
    };
  }

  render() {
    const { props } = this;
    const { firstName, lastName, birthDate, email, createPassword, confirmPassword } = this.state;
    const validateStatus = !firstName || !lastName || !email || !createPassword || !confirmPassword ;//|| !birthDate;

    return (
      <div className="container container--m">
        <br/><br/>
        <h2 style={{ textAlign:'center' }}>Join Wana!</h2>
        <p style={{ textAlign:'center' }}>Find babysitters you know and trust, for free!</p>
        <div className="card card--shadow padding--m -of-visible">
          <div className="well">

            <div className="well__row">
                <div className="well__section">
                  <FacebookLogin
                    appId={fbAppId}
                    autoLoad={false}
                    fields="name,email,picture"
                    cssClass="btn btn--l btn--facebook btn--block icon--left"
                    icon="fa-facebook-official"
                    textButton="Sign Up With Facebook"
                    callback={responseFacebook}
                    scope="public_profile,user_relationship_details"
                  />
                </div>
              </div>

              <div className="well__row">
                <div className="well__section">
                  <p style={{ textAlign:'center' }}>Or</p>
                  <InputFormField
                    name="email"
                    value={this.state.email}
                    type="text"
                    placeholder={'Email'}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    label
                    labelValue="Email"/>
                </div>
              </div>

              <div className="well__row">
                <div className="well__section is-halved -border-none">
                  <InputFormField
                    name="lastName"
                    value={this.state.lastName}
                    type="text"
                    placeholder={'Last Name'}
                    onChange={(e) => this.setState({ lastName: e.target.value })}
                    label
                    labelValue="Last Name"
                    disabled={this.state.lastNameFromFamily}/>
                </div>
                <div className="well__section is-halved -border-none">
                  <InputFormField
                    name="firstName"
                    value={this.state.firstName}
                    type="text"
                    placeholder={'First Name'}
                    onChange={(e) => this.setState({ firstName: e.target.value })}
                    label
                    labelValue="First Name"/>
                </div>
              </div>

              <div className="well__row">
                <div className="well__section">
                  <InputFormField
                    type="text"
                    mask="date"
                    name="birthDate"
                    onChange={(e) => this.setState({ birthDate: e.target.value })}
                    value={this.props.birthDate}
                    placeholder={'MM/DD/YYYY'}
                    label={true}
                    labelValue="DOB"/>
                </div>
              </div>

              <div className="well__row">
                <div className="well__section">
                  <InputFormField
                  name="createPassword"
                  value={this.state.createPassword}
                  type="password"
                  placeholder={'Create Password'}
                  onChange={(e) => this.setState({ createPassword: e.target.value })}
                  label={true}
                  labelValue="Create Password"/>
                </div>
              </div>

              <div className="well__row">
                <div className="well__section">
                  <InputFormField
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  type="password"
                  placeholder={'Confirm Password'}
                  onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                  label={true}
                  labelValue="Confirm Password"/>
                </div>
              </div>
              {createPassword !== confirmPassword && <div className="well__row">
                <div className="well__section text-center">
                  <h4 style={{ color: 'red' }}>Passwords doesn't match</h4>
                </div>
              </div>}

              <div className="well__row">
                <div className="well__section">
                    <button onClick={this.takeToSignUpDetailsForm} className="btn btn--primary" style={validateStatus ? {  cursor: 'no-drop', backgroundColor: 'rgba(95,112,208, 0.7)' }:{}} disabled={validateStatus && 'disabled'}>SIGN UP</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
