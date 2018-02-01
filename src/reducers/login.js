import { fromJS } from 'immutable';

import {
  LOGIN_ACTION_START,
  LOGIN_ACTION_ERROR,
  LOGIN_ACTION_SUCCESS,
  CHANGE_VALUE,
  SET_SIGNUP_DATA,
  SET_SIGNUP_TYPE
} from 'actions/login';

const initialState = fromJS({
  signupType: 'email',
  loginModel: {
    email: "",
    password: "",
  },
  loginStatus: {
    loading: false,
    loaded: false,
    error: false,
    data: false,
  }
});

const actionsMap = {
  [CHANGE_VALUE]: (state, action) => {
    return state.setIn(action.name, action.value);
  },
  [SET_SIGNUP_DATA]: (state, action) => {
    return state.set('signUpModel', action.signUpData);
  },
  [SET_SIGNUP_TYPE]: (state, action) => {
    return state.set('signupType', action.signupType);
  },
  // Async action
  [LOGIN_ACTION_START]: (state) => {
    return state.merge(fromJS({
      loginStatus: {
        loading: true,
        loaded: false,
        error: false,
        data: false,
      }
    }));
  },
  [LOGIN_ACTION_ERROR]: (state, action) => {
    return state.merge(fromJS({
      loginStatus: {
        loading: false,
        loaded: false,
        error: action.error,
        data: false,
      }
    }));
  },
  [LOGIN_ACTION_SUCCESS]: (state, action) => {
    return state.merge(fromJS({
      loginStatus: {
        loading: false,
        loaded: true,
        error: false,
        data: action.data,
      }
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
