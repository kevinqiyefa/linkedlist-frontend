import { callAPI } from '../../../services/api';
import { setToken, clearToken } from '../../../services/token';
import * as t from '../actionTypes';

export function authRequest(type, usernameOrHandle, password) {
  return async dispatch => {
    if (type === 'user') {
      // login for users
      try {
        dispatch({ type: t.USER_AUTH_REQUEST });
        let { token } = await callAPI('POST', '/user-auth', false, {
          username: usernameOrHandle,
          password
        });
        return dispatch(authSuccess('user', token));
      } catch (error) {
        return dispatch(authFail('user', error));
      }
    } else if (type === 'company') {
      // login for companies --> not yet implemented
    }
  };
}

export function authSuccess(type, token) {
  setToken(token);
  if (type === 'user') {
    return { type: t.USER_AUTH_SUCCESS };
  } else {
    // login for companies --> not yet implemented
  }
}

export function authFail(type, error) {
  if (type === 'user') {
    return { type: t.USER_AUTH_FAIL, error };
  } else {
    // login for companies --> not yet implemented
  }
}

export function logout() {
  // clear the token from localStorage
  clearToken();
  return { type: t.LOGOUT };
}
