import cookie from 'react-cookies';
import api, { getUserData, submitLogin } from '../api/auth';

export const INITIALIZE_START = 'INITIALIZE_START';
export const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
export const INITIALIZE_ERROR = 'INITIALIZE_ERROR';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_FACEBOOK_ACTION = 'login/LOGIN_FACEBOOK_ACTION';
export const LOGIN_FACEBOOK_ACTION_START = 'login/LOGIN_FACEBOOK_ACTION_START';
export const LOGIN_FACEBOOK_ACTION_ERROR = 'login/LOGIN_FACEBOOK_ACTION_ERROR';
export const LOGIN_FACEBOOK_ACTION_SUCCESS = 'login/LOGIN_FACEBOOK_ACTION_SUCCESS';

export const LOG_OUT = 'LOG_OUT';


export const initializeAsync = () => {
  return function(dispatch) {
    dispatch(initializeStart());
    const tokenExists = !!cookie.load('token');
    if (tokenExists) {
      getUserData()
        .then(data => dispatch(initializeSuccess(data)))
        .catch(error => dispatch(initializeError(error)));
    } else {
      dispatch(initializeError('No authentication token found. Please log in.'))
    }

  };
};
const initializeStart = () => {
  return { type: INITIALIZE_START };
};
const initializeSuccess = data => {
  return {
    type: INITIALIZE_SUCCESS,
    data
  };
};
const initializeError = error => {
  return {
    type: INITIALIZE_ERROR,
    error
  };
};

export const loginAsync = formData => {
  return function (dispatch) {
    dispatch(loginAsyncStart());

    submitLogin(formData)
      .then(data => {
        console.log('LOGIN ASYNC RESULTS: ', data)
        cookie.save(
          'token',
          data.token,
          {
            path: '/',
            maxAge: 3600
          }
        );
        if (data) {
          dispatch(loginAsyncSuccess(data));
        } else {
          console.log("ERROR: ", data);
          dispatch(loginAsyncError(data))
        }
      })
      .catch(error => {
        console.log("ERROR: ", error);
        dispatch(loginAsyncError(error))
      });
  };
};
const loginAsyncStart = () => {
  return { type: LOGIN_START };
}
const loginAsyncSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
const loginAsyncError = error => {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export const logOut = () => {
  cookie.remove('token');
  return { type: LOG_OUT };
}

// Facebook Login
export function loginFacebookAction() {
  return { type: LOGIN_FACEBOOK_ACTION };
}

function loginAsyncFacebookStart() {
  return { type: LOGIN_FACEBOOK_ACTION_START };
}

function loginAsyncFacebookSuccess(data) {
  return {
    type: LOGIN_FACEBOOK_ACTION_SUCCESS,
    data
  };
}

function loginAsyncFacebookError(error) {
  return {
    type: LOGIN_FACEBOOK_ACTION_ERROR,
    error
  };
}

export function loginAsyncFacebook(FormData) {
  return function (dispatch) {
    dispatch(loginAsyncFacebookStart());

    api.loginAsyncFacebook(FormData)
      .then(data => {
        if(!!data.accessToken) dispatch(loginAsyncFacebookError(data.accessToken))
        else {
          cookie.save(
            'token',
            data.token,
            {
              path: '/',
              maxAge: 3600
            }
          );
          dispatch(loginAsyncFacebookSuccess(data))
        }
      })
      .catch(error => {
        console.log("ERROR: ", error);
        dispatch(loginAsyncFacebookError(error))
      });
  };
}
