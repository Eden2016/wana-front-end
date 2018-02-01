import { Map } from 'immutable';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
  UPDATE_PROFILE_ASYNC_ACTION_START,
  UPDATE_PROFILE_ASYNC_ACTION_ERROR,
  UPDATE_PROFILE_ASYNC_ACTION_SUCCESS,
  SIGNUP_ASYNC_ACTION_START,
  SIGNUP_ASYNC_ACTION_ERROR,
  SIGNUP_ASYNC_ACTION_SUCCESS,
  SIGNUP_STORE_COMPLETED_FORM,
  SIGNUP_ASYNC_FACEBOOK_ACTION_START,
  SIGNUP_ASYNC_FACEBOOK_ACTION_ERROR,
  SIGNUP_ASYNC_FACEBOOK_ACTION_SUCCESS,
  ADD_FAMILY_ASYNC_START,
  ADD_FAMILY_ASYNC_ERROR,
  ADD_FAMILY_ASYNC_SUCCESS,
  GET_FAMILY_ASYNC_START,
  GET_FAMILY_ASYNC_ERROR,
  GET_FAMILY_ASYNC_SUCCESS,
  ADD_FAMILY_MEMBER_ASYNC_START,
  ADD_FAMILY_MEMBER_ASYNC_ERROR,
  ADD_FAMILY_MEMBER_ASYNC_SUCCESS,
} from 'actions/app';

const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  asyncProfileUpdating: false,
  asyncProfileUpdateError: null,
  asyncProfileUpdateData: null,
  asyncFamilyLoading: false,
  asyncFamilyLoadingData: null,
  asyncFamilyLoadingErr: null,
  asyncFamilyUpdating: false,
  asyncFamilyUpdateError: null,
  asyncFamilyUpdateData: null,
  asyncFamilyMemberUpdating: false,
  asyncFamilyMemberUpdateError: null,
  asyncFamilyMemberUpdateData: null,
  signupCompletedFormData: null
});

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },

  // Async action
  [TEST_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [TEST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncData: action.data,
    }));
  },

  [UPDATE_PROFILE_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncProfileUpdating: true,
      asyncProfileUpdateError: null,
      asyncProfileUpdateData: null,
    }));
  },
  [UPDATE_PROFILE_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncProfileUpdating: false,
      asyncProfileUpdateError: action.error.message,
    }));
  },
  [UPDATE_PROFILE_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncProfileUpdating: false,
      asyncProfileUpdateData: action.data,
    }));
  },

  [SIGNUP_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncSigningUp: true,
      asyncSignupError: null,
      asyncSignupData: null,
    }));
  },
  [SIGNUP_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncSigningUp: false,
      asyncSignupError: action.error.message,
    }));
  },
  [SIGNUP_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncSigningUp: false,
      asyncSignupData: action.data,
    }));
  },
  [SIGNUP_ASYNC_FACEBOOK_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncSigningUp: true,
      asyncSignupError: null,
      asyncSignupData: null,
    }));
  },
  [SIGNUP_ASYNC_FACEBOOK_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncSigningUp: false,
      asyncSignupError: action.error.message,
    }));
  },
  [SIGNUP_ASYNC_FACEBOOK_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncSigningUp: false,
      asyncSignupData: action.data,
    }));
  },
  [SIGNUP_STORE_COMPLETED_FORM]: (state, action) => {
    return state.merge(Map({
      signupCompletedFormData: action.formData
    }));
  },

  [ADD_FAMILY_ASYNC_START]: (state) => {
    return state.merge(Map({
      asyncFamilyUpdating: true,
      asyncFamilyUpdateError: null,
      asyncFamilyUpdateData: null,
    }));
  },
  [ADD_FAMILY_ASYNC_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncFamilyUpdating: false,
      asyncFamilyUpdateError: action.error.message,
    }));
  },
  [ADD_FAMILY_ASYNC_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncFamilyUpdating: false,
      asyncFamilyUpdateData: action.data,
    }));
  },

  [GET_FAMILY_ASYNC_START]: (state) => {
    return state.merge(Map({
      asyncFamilyLoading: true,
      asyncFamilyLoadingError: null,
      asyncFamilyLoadingData: null,
    }));
  },
  [GET_FAMILY_ASYNC_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncFamilyLoading: false,
      asyncFamilyLoadingError: action.error.message,
    }));
  },
  [GET_FAMILY_ASYNC_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncFamilyLoading: false,
      asyncFamilyLoadingData: action.data,
    }));
  },

  [ADD_FAMILY_MEMBER_ASYNC_START]: (state) => {
    return state.merge(Map({
      asyncFamilyMemberUpdating: true,
      asyncFamilyMemberUpdateError: null,
      asyncFamilyMemberUpdateData: null,
    }));
  },
  [ADD_FAMILY_MEMBER_ASYNC_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncFamilyMemberUpdating: false,
      asyncFamilyMemberUpdateError: action.error.message,
    }));
  },
  [ADD_FAMILY_MEMBER_ASYNC_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncFamilyMemberUpdating: false,
      asyncFamilyMemberUpdateData: action.data,
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
