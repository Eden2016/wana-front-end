import api from 'api';
import cookie from 'react-cookies';

export const CHANGE_VALUE = 'login/CHANGE_VALUE';
export const SET_SIGNUP_DATA = 'login/SET_SIGNUP_DATA';
export const SET_SIGNUP_TYPE = 'login/SET_SIGNUP_TYPE';

export const LOGIN_ACTION = 'login/LOGIN_ACTION';
export const LOGIN_ACTION_START = 'login/LOGIN_ACTION_START';
export const LOGIN_ACTION_ERROR = 'login/LOGIN_ACTION_ERROR';
export const LOGIN_ACTION_SUCCESS = 'login/LOGIN_ACTION_SUCCESS';


export function loginAction() {
  return {
    type: LOGIN_ACTION,
  };
}

export function setSignUpData(signUpData) {
  return {
    type: SET_SIGNUP_DATA,
    signUpData,
  };
}

export function setSignUpType(signUpType) {
  return {
    type: SET_SIGNUP_TYPE,
    signUpType,
  };
}

export function changeValue(name, value) {
  return {
    type: CHANGE_VALUE,
    name,
    value,
  }
}

// Async action example

function loginAsyncStart() {
  return {
    type: LOGIN_ACTION_START,
  };
}

function loginAsyncSuccess(data) {
  return {
    type: LOGIN_ACTION_SUCCESS,
    data,
  };
}

function loginAsyncError(error) {
  return {
    type: LOGIN_ACTION_ERROR,
    error,
  };
}

export function loginAsync(FormData) {
  return function (dispatch) {
    dispatch(loginAsyncStart());

    api.loginAsync(FormData)
      .then(data => {
        console.log('LOGIN ASYNC RESULTS: ', data)
        if(!!data.email) dispatch(loginAsyncError(data.email))
        else {
          cookie.save(
            'token',
            data.token,
            {
              path: '/',
              maxAge: 3600
            }
          );
          dispatch(loginAsyncSuccess(data))
        }
      })
      .catch(error => {
        console.log("ERROR: ", error);
        dispatch(loginAsyncError(error))
      });
  };
}

// Update
