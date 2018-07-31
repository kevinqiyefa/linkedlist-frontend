import { callAPI } from '../../../services/api';
import { setToken, clearToken } from '../../../services/token';
import * as t from '../actionTypes';

export async function authRequest(type, usernameOrHandle, password) {
  return async dispatch => {
    if (type === 'user') {
      // login for users
      try {
        let { token } = await callAPI('POST', '/user-auth', false, {
          username: usernameOrHandle,
          password
        });
        dispatch(authSuccess('user', token));
      } catch (error) {
        dispatch(authFail('user', error));
      }
    } else if (type === 'company') {
      // login for companies --> not yet implemented
    }
  };
}

export async function authSuccess(type, token) {
  setToken(token);
  if (type === 'user') {
    return { type: t.USER_AUTH_SUCCESS };
  } else if (type === 'company') {
    // login for companies --> not yet implemented
  }
}

export async function authFail(type, error) {
  if (type === 'user') {
    return { type: t.USER_AUTH_FAIL, error };
  } else if (type === 'company') {
    // login for companies --> not yet implemented
  }
}

export function logout() {
  // clear the token from localStorage
  clearToken();
  return { type: t.LOGOUT };
}
