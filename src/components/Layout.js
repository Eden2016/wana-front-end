import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Login from 'views/login';
import Search from 'views/search';
import SearchResults from 'views/search/results';
import Signup from 'views/signup';
import Help from 'views/marketing/help';
import Faq from 'views/marketing/faq';
import Privacy from 'views/marketing/privacy';
import Terms from 'views/marketing/terms';
import NotFound from 'views/notFound';
import FamilyProfile from 'views/familyProfile/FamilyProfile'
import SignupComplete from 'views/signup/complete';
import SignupThanks from 'views/signup/thanks';
import AccountSettings from 'views/account/settings';
import AccountTransactions from 'views/account/transactions';
import AccountEmailPrefs from 'views/account/email-prefs';
import AccountPrivacy from 'views/account/privacy';
import AccountBilling from 'views/account/billing';
import MyFamily from 'views/family/my-family';
import EditMyFamily from 'views/family/edit-my-family';
import ForgotPassword from 'views/forgot-password';
import Home from 'views/marketing/home';

import ErrorHandler from './global/ErrorHandler';
import { initializeAsync } from '../actions/auth';
import ChatWidget from 'components/wana-ui/ChatWidget/ChatWidget';

const publicPath = '/';
const timeout = { enter: 300, exit: 200 };

const mapStateToProps = (state) => ({
  errorHandler: state.errorHandler,
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => {
  return { initialize: () => dispatch(initializeAsync()) };
}

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

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { auth: { isAuthenticated } } = this.props;
    isAuthenticated ? null : this.props.initialize();
  }

  render() {
    const { auth } = this.props;
    const { authInProgress, isAuthenticated, profileComplete } = auth || {};
    const unauthRoutes = (
      <Switch>
        <Route exact path={ publicPath } component={ Search } />
        <Route exact path={`/search`} component={ Search } />
        <Route path={`/search/results`} component={ SearchResults } />

        <Redirect exact from={`/sitting`} to={`/sitting/upcoming`}/>
        <Route exact path={`/sitting/upcoming`} component={ Login } />
        <Route exact path={`/sitting/sit-details/:id`} component={ Login } />
        <Route exact path={`/sitting/complete`} component={ Login } />

        <Route path={`/profile/:id`} component={ FamilyProfile } />

        <Redirect exact from={`/requests`} to={`/requests/sent`}/>
        <Route exact path={`/requests/sent`} component={ Login } />
        <Route exact path={`/requests/received`} component={ Login } />
        <Redirect exact from={`/offers`} to={`/offers/sent`}/>
        <Route exact path={`/offers/sent`} component={ Login } />
        <Route exact path={`/offers/received`} component={ Login } />

        <Route path={`/sent/request/:id`} component={ Login } />
        <Route path={`/received/request/:id`} component={ Login } />
        <Route path={`/sent/offer/:id`} component={ Login } />
        <Route path={`/received/offer/:id`} component={ Login } />

        <Route exact path={`/signup`} component={ Signup } />
        <Route path={`/signup/complete`} component={ SignupComplete } />
        <Route path={`/signup/thanks`} component={ SignupThanks } />
        <Route path={`/login`} component={ Login } />
        <Route path={`/forgot-password`} component={ ForgotPassword } />

        <Route path={ `/family/:id/:modal` } component={ Login } />
        <Route exact path={ '/my-family' } component={ MyFamily } />
        <Route path={ '/my-family/edit' } component={ EditMyFamily } />

        <Redirect exact from={ `/account` } to={ `/account/settings` } />
        <Route path={`/account/settings`} component={ AccountSettings } />
        <Route path={`/account/transactions`} component={ AccountTransactions } />
        <Route path={`account/billing`} component={AccountBilling} />
        <Route path={`/account/email-prefs`} component={ AccountEmailPrefs } />
        <Route path={`/account/privacy-settings`} component={ AccountPrivacy } />

        <Route exact path={`/connections`} component={ Login } />
        <Route path={`/connections/favorites`} component={ Login } />
        <Route path={`/connections/past`} component={ Login} />
        <Route path={`/connections/facebook`} component={ Login } />

        <Route exact path={`/meetups`} component={ Login } />
        <Route path={`/meetups/:id`} component={ Login } />

        <Route path={ '/home' } component={ Home } />
        <Route path={ '/help' } component={ Help } />
        <Route path={ '/faq' } component={ Faq } />
        <Route path={ '/terms' } component={ Terms } />
        <Route path={ '/privacy' } component={ Privacy } />

        <Route path='*' component={ NotFound } />
      </Switch>
    );
    const incompleteProfileRoutes = (
      <Switch>
        <Route exact path={ publicPath } component={ Search } />
        <Route exact path={`/search`} component={ Search } />
        <Route path={`/search/results`} component={ SearchResults } />

        <Route exact path={`/signup`} component={ Signup } />
        <Route path={`/signup/complete`} component={ SignupComplete } />
        <Route path={`/signup/thanks`} component={ SignupThanks } />
        <Route path={`/login`} component={ Login } />
        <Route path={`/forgot-password`} component={ ForgotPassword } />

        <Redirect exact from={ `/account` } to={ `/account/settings` } />
        <Route path={`/account/settings`} component={ AccountSettings } />
        <Route path={`/account/transactions`} component={ AccountTransactions } />
        <Route path={`account/billing`} component={AccountBilling} />
        <Route path={`/account/email-prefs`} component={ AccountEmailPrefs } />
        <Route path={`/account/privacy-settings`} component={ AccountPrivacy } />

        <Route path={ '/home' } component={ Home } />
        <Route path={ '/help' } component={ Help } />
        <Route path={ '/faq' } component={ Faq } />
        <Route path={ '/terms' } component={ Terms } />
        <Route path={ '/privacy' } component={ Privacy } />

        <Route path='*' component={ SignupComplete } />
      </Switch>
    );
    return (
      <div className="layout">
        {
          this.props.errorHandler.map((err, i) => <ErrorHandler key={`error-${i}`} error={err} index={i} />)
        }
        { isAuthenticated && this.props.children }
        { !isAuthenticated && unauthRoutes }
        { isAuthenticated && profileComplete && <ChatWidget /> }
      </div>
    )
  }
}


// !!!IMPORTANT!!! Do NOT remove or alter the structure of `withRouter()` here!
// Due to a conflict between React Router and React-Redux, this component must
// be wrapped by `withRouter()` for pushState (react router links) to work.
// Details explained here: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));


// TODO - re-enable
// Restrictive routing based on profile completion
// const restrictiveRoutingMarkup = (
//   <div className="layout">
//     {
//       this.props.errorHandler.map((err, i) => <ErrorHandler key={`error-${i}`} error={err} index={i} />)
//     }
//     { isAuthenticated && profileComplete && this.props.children }
//     { isAuthenticated && !profileComplete && incompleteProfileRoutes }
//     { !isAuthenticated && unauthRoutes }
//     { isAuthenticated && profileComplete && <ChatWidget /> }
//   </div>
// );
