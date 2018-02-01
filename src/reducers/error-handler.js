import Immutable from 'immutable';

const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';

const initalState = Immutable.fromJS([]);

export default function reducer(state=initalState, action={}) {
  switch(action.type) {
    case ADD_ERROR:
      return state.push(
        action.data
      );
    case REMOVE_ERROR:
      return state.filter(err => err !== action.error);
    default:
      return state;
  }
}

// actions
const addError = (data) => ({ type: SET_URLS, data });

const removeError = (error) => ({ type: REMOVE_ERROR, error });

export const actions = {
    addError,
    removeError,
};
