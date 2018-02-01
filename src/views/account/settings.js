import React, { Component } from 'react';
import { fbAppId } from '../../config/config';
import { Link } from 'react-router-dom';
import ReactFilestack from 'filestack-react';
import FacebookLogin from 'react-facebook-login';

import NavMenu from "components/global/navmenu"
import Navigation from './navigation';

import { getUserData, updateUserProfile } from '../../api/settings';

const apikey = 'Afg12uMqtTpdI9lmVwd89z';

const options = {
  accept: 'image/*',
  maxFiles: 1,
  maxSize: 1024 * 1024,
  fromSources: ['local_file_system', 'facebook', 'url', 'instagram', 'webcam'],
  storeTo: {
    location: 's3',
  },
};

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      new_password: '',
      new_password_confirmation: '',
      email: '',
      imagePreviewUrl: '',
    }
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  async componentDidMount() {
    const res = await getUserData();
    this.setState({ email: res.success.email, imagePreviewUrl: res.success.avatar });
  }

  submitChanges = async () => {
    const { password, new_password, new_password_confirmation } = this.state;
    if (!new_password && !new_password_confirmation) return;
    if (new_password !== new_password_confirmation) {
      alert('new password does not match!');
      return;
    }
    const updateData = { password, new_password, new_password_confirmation };
    const res = await updateUserProfile(updateData);
    if (res.success) {
      this.setState({ password: '', new_password: '', new_password_confirmation: '' });
      alert('password updated successfully!');
    } else {
      alert('wrong password!');
    }
  }

  handleFacebook = (res) => {

  }

  onSuccess = async (data) => {
    const { url } = data.filesUploaded[0];
    const res = await updateUserProfile({ avatar: url });
    this.setState({ imagePreviewUrl: res.success.avatar });
  }

  onError = (err) => {
    console.log(err);
  }

  render() {
    const { email, password, new_password, new_password_confirmation, imagePreviewUrl } = this.state;
    return (
      <div>
        <NavMenu history={this.props.history} />
        <div>
          <Navigation />
          <div className="account-settings content__section">
            <div className="section__head bar bar--l bar--panel">
              <div className="container wrapper">
                <div className="wrapper__inner">
                  <h1 className="-fontSize-l">Account Settings</h1>
                </div>
                <div className="wrapper__inner -align-right">
                  <Link className="btn btn--primary btn--outline" to='/my-family'>My Family</Link>
                </div>
              </div>
            </div>
            <div className="section__content">
              <div className="container container--s">

                <div className="-align-center" style={{ position:'relative', zIndex:1 }}>
                <ReactFilestack
                  apikey={apikey}
                  options={options}
                  onSuccess={this.onSuccess}
                  onError={this.onError}
                  render={({ onPick }) => (
                    <label className="avatar avatar--xl avatar--edit"
                      style={{ backgroundImage: `url(${imagePreviewUrl})` }}>
                      <input type="file" onClick={onPick} />
                    </label>
                  )}
                />
                </div>
                <div className="card card--shadow" style={{ marginTop:'-60px', paddingTop:'60px' }}>
                  <div className="card__body card__body--row">
                    <label className="input input--text">
                      <span className="label">Email Address</span>
                      <input
                        type="email"
                        className="input__field"
                        onChange={this.handleInputChange}
                        value={email}
                        placeholder="you@youremail.com"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="card__body card__body--row">
                    <label className="input input--text">
                      <span className="label">Change Password</span>
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                        value={password}
                        className="input__field"
                        placeholder="Current Password"
                      />
                    </label>
                    <label className="input input--text">
                      <input
                        type="password"
                        name="new_password"
                        onChange={this.handleInputChange}
                        value={new_password}
                        style={{ borderColor: new_password !== new_password_confirmation ? 'red' : '' }}
                        className="input__field"
                        placeholder="New Password"
                      />
                    </label>
                    <label className="input input--text">
                      <input
                        type="password"
                        name="new_password_confirmation"
                        onChange={this.handleInputChange}
                        value={new_password_confirmation}
                        style={{ borderColor: new_password !== new_password_confirmation ? 'red' : '' }}
                        className="input__field"
                        placeholder="New Password Confirmation"
                      />
                      <small>Passwords must be at least 8 characters and are case sensitive.</small>
                    </label>
                  </div>
                  <div className="card__body card__body--row">
                    <label className="input input--button">
                      <span className="label">Connect with Facebook</span>
                      <FacebookLogin
                        appId={fbAppId}
                        autoLoad={false}
                        fields="name,email,picture"
                        cssClass="btn btn--facebook btn--block"
                        icon="fa-facebook-official"
                        textButton="Continue With Facebook"
                        callback={this.handleFacebook}
                        scope="public_profile"
                        />
                      <small>Connect your Facebook account to easily find your friends on Wana!</small>
                    </label>
                  </div>
                </div>
                <div className="well -border-none no--pad wrapper margin--m no--margin-b no--margin-lr">
                  <div className="wrapper__inner -align-right">
                    <ul className="list list--inline">
                      <li className="item">
                        <button onClick={this.submitChanges} className="btn btn--primary btn--s">Save Changes</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default Account;
