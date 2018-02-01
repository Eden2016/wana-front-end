import {
  INITIALIZE_START,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from '../actions/auth';

import {
  SIGNUP_ASYNC_ACTION_SUCCESS
} from 'actions/app';

import { validateProfile } from '../utils/validators';

const INITIAL_STATE = {
  isAuthenticated: false,
  authInProgress: false,
  authError: null,
  loginInProgress: false,
  loginError: null,
  profileComplete: false,
  userData: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INITIALIZE_START:// set inProgress to true, reset to initial state
    const obj = { 'a': 1, 'b': 2, 'c': 3 };
  const newObj = Object.assign(...Object.entries(obj).map(([k, v]) => {
    return ({[k]: v * v});
  }));
  console.log('!!!HHJGHJ', newObj)
      return {
        ...state,
        isAuthenticated: false,
        authInProgress: true,
        userData: null,
        authError: null
      };
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authInProgress: false,
        userData: action.data,
        profileComplete: validateProfile(action.data),
        authError: null
      };
    case INITIALIZE_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        authInProgress: false,
        authError: action.error
      };
    case SIGNUP_ASYNC_ACTION_SUCCESS:
      const { success, token } = action.data;
      return {
        ...state,
        isAuthenticated: true,
        authInProgress: false,
        profileComplete: validateProfile(action.data),
        userData: {
          ...success,
          token
        }
      }
    case LOGIN_START:
      return {
        ...state,
        loginInProgress: true,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginInProgress: false,
        profileComplete: validateProfile(action.data),
        userData: {
          ...action.data.success,
          token: action.data.token
        }
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginInProgress: false,
        loginError: action.error
      };
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
