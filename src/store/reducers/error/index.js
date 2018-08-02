import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = { hasError: false, title: '', message: '' };

export default function errorReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.SET_ERROR:
      return {
        ...state,
        hasError: true,
        title: 'Error',
        message: action.error.message || ''
      };
    case t.CLEAR_ERROR:
      return DEFAULT_STATE;
    case t.CREATE_USER_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'There was a problem signing up.',
        message: action.error.message
      };
    case t.USER_AUTH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'There was a problem logging in.',
        message: action.error.message
      };
    case t.FETCH_USER_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'There was a problem loading this user profile.',
        message: action.error.message
      };
    case t.FETCH_JOBS_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to load jobs.',
        message: action.error.message
      };
    case t.FETCH_USER_SEARCH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to load users.',
        message: action.error.message
      };
    case t.FETCH_COMPANY_SEARCH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to load companies.',
        message: action.error.message
      };
    default:
      return state;
  }
}
