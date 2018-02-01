import api from 'api';
import cookie from "react-cookies";

import { setSignUpType } from './auth';

export const TEST_ACTION = 'TEST_ACTION';

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START';
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR';
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS';

export const UPDATE_PROFILE_ASYNC_ACTION_START = 'UPDATE_PROFILE_ASYNC_ACTION_START';
export const UPDATE_PROFILE_ASYNC_ACTION_ERROR = 'UPDATE_PROFILE_ASYNC_ACTION_ERROR';
export const UPDATE_PROFILE_ASYNC_ACTION_SUCCESS = 'UPDATE_PROFILE_ASYNC_ACTION_SUCCESS';

export const SIGNUP_ASYNC_ACTION_START = 'SIGNUP_ASYNC_ACTION_START';
export const SIGNUP_ASYNC_ACTION_ERROR = 'SIGNUP_ASYNC_ACTION_ERROR';
export const SIGNUP_ASYNC_ACTION_SUCCESS = 'SIGNUP_ASYNC_ACTION_SUCCESS';

export const SIGNUP_ASYNC_FACEBOOK_ACTION_START = 'SIGNUP_ASYNC_FACEBOOK_ACTION_START';
export const SIGNUP_ASYNC_FACEBOOK_ACTION_ERROR = 'SIGNUP_ASYNC_FACEBOOK_ACTION_ERROR';
export const SIGNUP_ASYNC_FACEBOOK_ACTION_SUCCESS = 'SIGNUP_ASYNC_FACEBOOK_ACTION_SUCCESS';

export const ADD_FAMILY_ASYNC_START = 'ADD_FAMILY_ASYNC_START';
export const ADD_FAMILY_ASYNC_ERROR = 'ADD_FAMILY_ASYNC_ERROR';
export const ADD_FAMILY_ASYNC_SUCCESS = 'ADD_FAMILY_ASYNC_SUCCESS';

export const GET_FAMILY_ASYNC_START = 'GET_FAMILY_ASYNC_START';
export const GET_FAMILY_ASYNC_ERROR = 'GET_FAMILY_ASYNC_ERROR';
export const GET_FAMILY_ASYNC_SUCCESS = 'GET_FAMILY_ASYNC_SUCCESS';

export const ADD_FAMILY_MEMBER_ASYNC_START = 'ADD_FAMILY_MEMBER_ASYNC_START';
export const ADD_FAMILY_MEMBER_ASYNC_ERROR = 'ADD_FAMILY_MEMBER_ASYNC_ERROR';
export const ADD_FAMILY_MEMBER_ASYNC_SUCCESS = 'ADD_FAMILY_MEMBER_ASYNC_SUCCESS';

export const SIGNUP_STORE_COMPLETED_FORM = 'SIGNUP_STORE_COMPLETED_FORM';

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

// Async action example

export function testAsyncStart() {
  return {
    type: TEST_ASYNC_ACTION_START,
  };
}

export function testAsyncSuccess(data) {
  return {
    type: TEST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

export function testAsyncError(error) {
  return {
    type: TEST_ASYNC_ACTION_ERROR,
    error,
  };
}

export function testAsync() {
  return function (dispatch) {
    dispatch(testAsyncStart());

    api.testAsync()
      .then(data => dispatch(testAsyncSuccess(data)))
      .catch(error => dispatch(testAsyncError(error)));
  };
}

// actions for updating profile

export function updateProfileAsyncStart() {
  return {
    type: UPDATE_PROFILE_ASYNC_ACTION_START,
  };
}

export function updateProfileAsyncSuccess(data) {
  return {
    type: UPDATE_PROFILE_ASYNC_ACTION_SUCCESS,
    data,
  };
}

export function updateProfileAsyncError(error) {
  return {
    type: UPDATE_PROFILE_ASYNC_ACTION_ERROR,
    error,
  };
}

export function updateProfileAsync(formData) {
  return function (dispatch) {
    dispatch(updateProfileAsyncStart());

    api.updateProfileAsync(formData)
      .then(data => dispatch(updateProfileAsyncSuccess(data)))
      .catch(error => dispatch(updateProfileAsyncError(error)));
  };
}

// actions for signup

export function signUpAsyncStart() {
  return {
    type: SIGNUP_ASYNC_ACTION_START,
  };
}

export function signUpAsyncSuccess(data) {
  if (data.token) {
    cookie.save(
      'token',
      data.token,
      {
        path: '/',
        maxAge: 3600
      }
    );
  }
  return {
    type: SIGNUP_ASYNC_ACTION_SUCCESS,
    data,
  };
}

export function signUpAsyncError(error) {
  return {
    type: SIGNUP_ASYNC_ACTION_ERROR,
    error,
  };
}

export function signUpAsync(formData) {
  return function (dispatch) {
    dispatch(signUpAsyncStart());

    api.signUpAsync(formData)
      .then(data => dispatch(signUpAsyncSuccess(data)))
      .catch(error => dispatch(signUpAsyncError(error)));
  };
}

export function storeCompletedSignupForm(formData) {
  return {
    type: SIGNUP_STORE_COMPLETED_FORM,
    formData
  };
}

// family actions
export const addFamilyAsyncStart = () => {
  return { type: ADD_FAMILY_ASYNC_START };
}
export const addFamilyAsyncSuccess = () => {
  return { type: ADD_FAMILY_ASYNC_SUCCESS }
};
export const addFamilyAsyncError = error => {
  return { type: ADD_FAMILY_ASYNC_ERROR, error }
};
export function addFamilyAsync(familyName, familyData) {
  return function (dispatch) {
    dispatch(addFamilyAsyncStart());

    api.addFamilyAsync(familyName)
      .then(data => {
        familyData.forEach((childData) => {
          const { first_name, last_name, gender, role, avatar, birth_date } = childData;
          const childDataFormatted = {
            role: role.label.toLowerCase(),
            first_name,
            last_name,
            birth_date: birth_date.split("").reverse().join(""),
            //avatar, // Not implemented yet
            gender: gender.label.toLowerCase() || '',// only 'male' or 'female' work
          }
          console.log('adding family member sync call to backend', childDataFormatted)
          api.addFamilyMemberAsync(childDataFormatted);
        })
      })
      .then(data => dispatch(addFamilyAsyncSuccess(data)))
      .catch(err => dispatch(addFamilyAsyncError(err)));
  };
}
export function getFamilyAsync() {
  return function (dispatch) {
    dispatch(getFamilyAsyncStart());

    api.getFamilyAsync()
      .then(data => dispatch(getFamilyAsyncSuccess(data)))
      .catch(error => dispatch(getFamilyAsyncError(error)));
  };
}
export const getFamilyAsyncStart = () => {
  return { type: GET_FAMILY_ASYNC_START };
};
export const getFamilyAsyncSuccess = (data) => {
  return { type: GET_FAMILY_ASYNC_SUCCESS, data };
}
export const getFamilyAsyncError = error => {
  return { type: GET_FAMILY_ASYNC_ERROR, error };
}

export const addFamilyMemberAsyncStart = () => {
  return { type: ADD_FAMILY_MEMBER_ASYNC_START };
};
export const addFamilyMemberAsyncSuccess = () => {
  return { type: ADD_FAMILY_MEMBER_ASYNC_SUCCESS };
}
export const addFamilyMemberAsyncError = error => {
  return { type: ADD_FAMILY_MEMBER_ASYNC_ERROR, error };
}
export function addFamilyMemberAsync(formData) {
  return function (dispatch) {
    dispatch(addFamilyMemberAsyncStart());
    return api.addFamilyMemberAsync(formData)
      .then(data => dispatch(addFamilyMemberAsyncSuccess(data)))
      .catch(err => dispatch(addFamilyMemberAsyncError(err)));
  };
}

// Facebook Signup
export function signUpAsyncFacebookStart() {
  return { type: SIGNUP_ASYNC_FACEBOOK_ACTION_START };
}

export function signUpAsyncFacebookSuccess(data) {
  if (data.token) {
    cookie.save(
      'token',
      data.token,
      {
        path: '/',
        maxAge: 3600
      }
    );
  }
  return {
    type: SIGNUP_ASYNC_FACEBOOK_ACTION_SUCCESS,
    data
  };
}

export function signUpAsyncFacebookError(error) {
  return {
    type: SIGNUP_ASYNC_FACEBOOK_ACTION_ERROR,
    error,
  };
}

export function signUpAsyncFacebook(formData) {
  return function (dispatch) {
    dispatch(signUpAsyncFacebookStart());
    console.log('Submitted data for fb signup:', formData)
    // the api method isn't found
    api.signUpAsyncFacebook(formData)
      .then(data => dispatch(signUpAsyncFacebookSuccess(data)))
      .catch(error => dispatch(signUpAsyncFacebookError(error)));
  };
}
