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
    case t.FETCH_USERS_SEARCH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to search users.',
        message: action.error.message
      };
    case t.FETCH_COMPANIES_SEARCH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to search companies.',
        message: action.error.message
      };
    case t.FETCH_JOBS_SEARCH_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to search jobs.',
        message: action.error.message
      };
    case t.APPLY_JOB_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to apply jobs.',
        message: action.error.message
      };
    default:
      return state;
  }
}
