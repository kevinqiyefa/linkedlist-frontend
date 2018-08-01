import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false, // is there a token
  type: '' // user or company
};

export default function authReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.USER_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        type: 'user'
      };
    case t.USER_TOKEN_FOUND:
      return {
        ...state,
        isAuthenticated: true,
        type: 'user'
      };
    case t.NO_TOKEN_FOUND:
    default:
      return state;
  }
}
