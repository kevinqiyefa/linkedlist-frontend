import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = { hasError: false, message: '', details: '' };

export default function errorReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.SET_ERROR:
      return { ...state, hasError: true, message: action.error };
    case t.REMOVE_ERROR:
      return { ...state, hasError: true, message: '' };
    case t.CREATE_USER_FAIL:
      return {
        ...state,
        hasError: true,
        message: 'There was a problem signing up.',
        details: action.error.message
      };
    case t.USER_AUTH_FAIL:
      return {
        ...state,
        hasError: true,
        message: 'There was a problem logging in.',
        details: action.error.message
      };
    case t.FETCH_USER_FAIL:
      return {
        ...state,
        hasError: true,
        message: 'There was a problem loading this user profile.',
        details: action.error.message
      };
    case t.FETCH_JOBS_FAIL:
      return {
        ...state,
        hasError: true,
        message: 'Unable to load jobs.',
        details: action.error.message
      };
    default:
      return state;
  }
}
