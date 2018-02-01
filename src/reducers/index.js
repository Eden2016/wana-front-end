import { combineReducers } from 'redux';
import {
  combineForms,
  createForms // optional
} from 'react-redux-form';

import app from 'reducers/app';
import login from 'reducers/login';
import auth from 'reducers/auth';
import errorHandler from 'reducers/error-handler';

const initialSignupState = {
  first_name: '',
  last_name: '',
  birth_date: '',
  email: '',
  zip: '',
  password: '',
  password_confirmation: '',
  activities:'',
  parenting_styles: ''
};
const initialAddChildState = {
  first_name:'',
  last_name: '',
  birth_date: '',
  gender: {},
  avatar_url: '',
  role: { label: 'child' },
};
const initialAddAdultState = {
  first_name: '',
  last_name: '',
  lastNameFromFamily: false,
  avatar_url: '',
  gender: {},
  birth_date: '',
  role: '',
};
const formReducers = {
  signup: initialSignupState,
  addChild: initialAddChildState,
  addAdult: initialAddAdultState
};

export default combineReducers({
  app,
  auth,
  login,
  errorHandler,
  ...createForms(formReducers)
});
