import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';

import { getUserData } from '../../../api/settings';
import { loginAsync, logOut } from 'actions/auth';
import { changeValue, setSignUpData } from 'actions/login';


import LoginModal from 'components/forms/Login';
import InputFormField from 'components/wana-ui/input';
import FacebookLogin from 'react-facebook-login';
import TinyDropdown from '../../wana-ui/dropdown/tiny-dropdown';

import Notifications from './notifications';
import AccountDropdown from './accountDropdown';
import ExchangeDropdown from './exchangeDropdown';

const responseFacebook = (response) => {
  console.log(response);
}

const MobileNavMenu = props => {
  const { auth } = props;
  const { isAuthenticated, unreadMsgCount } = auth || {};
  return (
    <nav id="mobileNav" className="wrapper show--m">
      <div className="wrapper__inner">
        <div className="flex -align-center">
          <div className="flex__cell">
              <Link className="link link--block" to="/">
                <svg className="link__icon icon-search"><use xlinkHref="#icon-search"/></svg>
              </Link>
              <small className="ts--label">Search</small>
          </div>

          { isAuthenticated && <div className="flex__cell">
              <a className="link link--block">
                <svg className="link__icon icon-sits"><use xlinkHref="#icon-sits"/></svg>
              </a>
              <small className="ts--label">Sits</small>
          </div>
          }
          { !isAuthenticated && <div className="flex__cell">
              <a onClick={props.toggleModal} className="link link--block">
                <svg className="link__icon icon-sits"><use xlinkHref="#icon-sits"/></svg>
              </a>
              <small className="ts--label">Login</small>
            </div>
          }
          { !isAuthenticated && <div className="flex__cell">
              <Link to="/signup" className="link link--block">
                <svg className="link__icon icon-sits"><use xlinkHref="#icon-sits"/></svg>
              </Link>
              <small className="ts--label">Sign Up</small>
            </div>
          }
          { isAuthenticated && <div className="flex__cell">
              <a className="link link--block" data-badge={unreadMsgCount}>
                <svg className="link__icon icon-inbox-line"><use xlinkHref="#icon-inbox-line"/></svg>
              </a>
              <small className="ts--label">Inbox</small>
          </div>}
          { isAuthenticated && <div className="flex__cell">
              <a className="link link--block">
                <svg className="link__icon icon-family"><use xlinkHref="#icon-family"/></svg>
              </a>
              <small className="ts--label">Family</small>
          </div>}
        </div>
      </div>
    </nav>
  );
};

const SiteNavMenu = props => {
  return (
    <div className="wrapper__inner">
      <ul id="leftNav" className="list list--inline list--divided">
        <li className="item">
            <Link to="/">
              <img id="logoMain" src="/assets/img/logo-wana-reverse.svg" alt="Wana Family Network"/>
            </Link>
        </li>
        <li className="item hide--l -border-none">
            <div className="input input--text input--search input--has-icon no--margin-b">
                <input type="search" id="mainSearch" className="input__field" placeholder="Find families in Los Angeles..."/>
                <label className="input__icon">
                  <svg className="icon-search icon--xs"><use xlinkHref="#icon-search"/></svg>
                </label>
            </div>
        </li>
        <li id="mobileSearchBtn" className="item show--l hide--m">
            <svg className="icon-search"><use xlinkHref="#icon-search"/></svg>
        </li>
      </ul>
    </div>
  );
};

const AccountNavMenu = props => {
  const { match, auth } = props;
  const { userData, isAuthenticated, credits, unreadMsgCount } = auth || {};
  const { exchange_center } = userData || {};
  const { path } = match || {};
  const transactionsCount = exchange_center ? exchange_center.length : 0;
  const placeholder = '../../../assets/img/def-avatar.png';
  const avatar = userData ? userData.avatar ? userData.avatar : placeholder : placeholder;
  const isPageActive = (page, currentLocation) => {
    if (page === currentLocation) return true;
    return false;
  }
  console.log('AccountNavMenu render props', props);
  console.log('cookie:', cookie.load('token'))
  return (
    <div className="wrapper__inner -align-right">
      <ul id="rightNav" className="list list--inline list--divided -tight">
        <li className="item hide--m">
          {isAuthenticated ? <ul className="list list--inline">
            <li className="item">
              <Link className={`link link--primary ${ isPageActive('sitting', path) ? 'is--active' : '' }`} to="/sitting">Sits</Link>
            </li>
            <li className="item">
              <Link className={`link link--primary ${isPageActive('requests', path) ? 'is--active' : ''}`} to="/requests">Requests</Link>
            </li>
            <li className="item">
              <Link className={`link link--primary ${isPageActive('offers', path) ? 'is--active' : ''}`} to="/offers">Offers</Link>
            </li>
          </ul>
          :
            <ul className="list list--inline">
              <li className="item">
                <a className="link link--primary" onClick={props.toggleModal}>Login</a>
              </li>
              <li className="item">
                <button className="btn btn--primary btn--reversed" onClick={props.takeToSignUpForm}>Sign Up</button>
              </li>
            </ul>
          }
        </li>
        { isAuthenticated &&  <li className="item">
          <ul className="list list--inline">
            <li>
              <ExchangeDropdown auth={auth}>
                <div className="link link--primary link--icon" data-badge={transactionsCount}>
                  <svg className="icon-inbox-line icon--s"><use xlinkHref="#icon-inbox-line"/></svg>
                </div>
              </ExchangeDropdown>
            </li>
            <li className="item hide--m">
              <Notifications />
            </li>
            <li className="item hide--m">
              <a className="dropdown dropdown--no-caret" href="javascript:;">
                <div className="link link--primary link--icon" data-counter={credits}>
                  <svg className="icon-points icon--s"><use xlinkHref="#icon-points"/></svg>
                </div>
                <div className="dropdown__box" data-position="right">
                  <div className="dropdown__box-inner">
                    Points Info
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>}
        { isAuthenticated && <li className="item -border-none no--margin">
          <AccountDropdown auth={auth} logout={props.logout}>
            <div className="avatar avatar--s" style={{ backgroundImage:"url(" + avatar + ")"}}></div>
          </AccountDropdown>
        </li>}
      </ul>
    </div>
  );
};




class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  componentWillReceiveProps(newProps) {

  }
  takeToSignUpForm = () => {
    const { history } = this.props;
    history.push('/signup');
  }
  takeToSignUpForm = () => {
    const { history } = this.props;
    history.push('/signup');
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  changeValue = (name, value) => {
    const { dispatch } = this.props;
    dispatch(changeValue(name, value));
  }

  loginUser = (data) => {
    const { dispatch } = this.props;
    dispatch(loginAsync(data));
  }

  logoutUser = () => {
    console.log('logout called');
    this.props.dispatch(logOut());
  }

  render() {
    const { showModal, location, match, auth } = this.props;
    return (
      <div className="nav-menu-container">
        <header id="headerMain" className="wrapper -reversed">
          <SiteNavMenu
            auth={auth}
            logout={this.logoutUser}
            location={location}
            match={match}
            toggleModal={this.toggleModal}
            takeToSignUpForm={this.takeToSignUpForm}
          />
          <AccountNavMenu
            auth={auth}
            logout={this.logoutUser}
            location={location}
            match={match}
            toggleModal={this.toggleModal}
            takeToSignUpForm={this.takeToSignUpForm}
          />
          <LoginModal
            auth={auth}
            loginUser={this.loginUser}
            history={this.props.history}
            changeValue={this.changeValue}
            showModal={this.state.showModal}
            toggleModal={this.toggleModal}
            takeToSignUpForm={this.takeToSignUpForm}
          />
        </header>
        <MobileNavMenu />
      </div>
    );
  }
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(NavMenu));


/* meetups
{ isAuthenticated && <div className="flex__cell">
              <a className="link link--block">
                <svg className="link__icon icon-date"><use xlinkHref="#icon-date"/></svg>
              </a>
              <small className="ts--label">Meetups</small>
          </div>
          }

          */
