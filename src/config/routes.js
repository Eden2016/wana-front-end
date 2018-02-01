import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { initializeAsync } from '../actions/auth';

const InitialLoadingHandler = props => {
  const loadingStyles = {
    backgroundColor: '#5F70D0',
    height: '100vh',
    width: '100vw'
  };
  return (
    <div style={loadingStyles}>
    {/* Loading spinner graphic goes here */}
    </div>
  );
};

// TODO - consolidate views like account into a single import to allow terser syntax.
// This routing is generally very verbose/simple and should probably be refactored
// App Pages
import Search from 'views/search';
import SearchResults from 'views/search/results';
import Signup from 'views/signup';
import Login from 'views/login';
import ForgotPassword from 'views/forgot-password';
import Family from 'views/family';
import MyFamily from 'views/family/my-family';
import EditMyFamily from 'views/family/edit-my-family';
import Meetups from 'views/meetups';
import MeetupDetail from 'views/meetups/meetup-detail';
import SignupComplete from 'views/signup/complete';
import SignupThanks from 'views/signup/thanks';
import AccountSettings from 'views/account/settings';
import AccountTransactions from 'views/account/transactions';
import AccountEmailPrefs from 'views/account/email-prefs';
import AccountPrivacy from 'views/account/privacy';
import AccountBilling from 'views/account/billing';
import SittingDetails from 'views/sitting/sitting-details';
import SittingWrap from 'views/sitting/sitting-wrap';
import ConnectionDetailWrap from 'views/connections/detail-wrap';
import Connections from 'views/connections';

import RequestsWrap from 'views/requests/requests-wrap';
import SentRequest from 'views/exchanges/requests/sent';
import ReceivedRequest from 'views/exchanges/requests/received';

import OffersWrap from 'views/offers/offers-wrap';
import SentOffer from 'views/exchanges/offers/sent';
import ReceivedOffer from 'views/exchanges/offers/received';

import Help from 'views/marketing/help';
import Faq from 'views/marketing/faq';
import Privacy from 'views/marketing/privacy';
import Terms from 'views/marketing/terms';
import NotFound from 'views/notFound';
import FamilyProfile from 'views/familyProfile/FamilyProfile'

import Layout from 'components/Layout';

// Marketing pages
import Home from 'views/marketing/home';

const Placeholder = (props) => {
  console.log('params:')
  console.log(props.match.params);
  return <h1>{props.location.pathname}</h1>
}

const publicPath = '/';
const timeout = { enter: 300, exit: 200 };

const Routes = () => {
  return (
    <BrowserRouter>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition timeout={timeout} classNames="fade" appear>
          <Layout>
            <Switch>
              <Route exact path={ publicPath } component={ Search } />
              {/* <Route exact path={`/search`} component={ Search } /> */}
              {/* <Route path={`/search/results`} component={ SearchResults } /> */}
              <Route path={`/search/:term/:location?`} component={ SearchResults } />


              <Redirect exact from={`/sitting`} to={`/sitting/upcoming`}/>
              <Route exact path={`/sitting/upcoming`} component={ SittingWrap } />
              <Route exact path={`/sitting/sit-details/:id`} component={ SittingDetails } />
              <Route exact path={`/sitting/complete`} component={ SittingWrap } />

              <Route path={`/profile/:id`} component={ FamilyProfile } />

              <Redirect exact from={`/requests`} to={`/requests/sent`}/>
              <Route exact path={`/requests/sent`} component={ RequestsWrap } />
              <Route exact path={`/requests/received`} component={ RequestsWrap } />
              <Redirect exact from={`/offers`} to={`/offers/sent`}/>
              <Route exact path={`/offers/sent`} component={ OffersWrap } />
              <Route exact path={`/offers/received`} component={ OffersWrap } />

              <Route path={`/sent/request/:id`} component={ SentRequest } />
              <Route path={`/received/request/:id`} component={ ReceivedRequest } />
              <Route path={`/sent/offer/:id`} component={ SentOffer } />
              <Route path={`/received/offer/:id`} component={ ReceivedOffer } />

              <Route exact path={`/signup`} component={ Signup } />
              <Route path={`/signup/complete`} component={ SignupComplete } />
              <Route path={`/signup/thanks`} component={ SignupThanks } />
              <Route path={`/login`} component={ Login } />
              <Route path={`/forgot-password`} component={ ForgotPassword } />

              <Route path={ `/family/:id/:modal` } component={ Family } />
              <Route exact path={ '/my-family' } component={ MyFamily } />
              <Route path={ '/my-family/edit' } component={ EditMyFamily } />

              <Redirect exact from={ `/account` } to={ `/account/settings` } />
              <Route path={`/account/settings`} component={ AccountSettings } />
              <Route path={`/account/transactions`} component={ AccountTransactions } />
              <Route path={`account/billing`} component={AccountBilling} />
              <Route path={`/account/email-prefs`} component={ AccountEmailPrefs } />
              <Route path={`/account/privacy-settings`} component={ AccountPrivacy } />

              <Route exact path={`/connections`} component={ Connections } />
              <Route path={`/connections/favorites`} component={ ConnectionDetailWrap } />
              <Route path={`/connections/past`} component={ ConnectionDetailWrap } />
              <Route path={`/connections/facebook`} component={ ConnectionDetailWrap } />

              <Route exact path={`/meetups`} component={ Meetups } />
              <Route path={`/meetups/:id`} component={ MeetupDetail } />>

              <Route path={ '/home' } component={ Home } />
              <Route path={ '/help' } component={ Help } />
              <Route path={ '/faq' } component={ Faq } />
              <Route path={ '/terms' } component={ Terms } />
              <Route path={ '/privacy' } component={ Privacy } />

              <Route path='*' component={ NotFound } />
            </Switch>
          </Layout>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
};

export default Routes;
