import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
import jwtDecode from 'jwt-decode';
import { getToken } from '../../../services/token';

export function createUserRequest(newUserPayload) {
  return async dispatch => {
    // login for users
    try {
      dispatch({ type: t.CREATE_USER_REQUEST });
      let newUser = await callAPI('POST', '/users', false, newUserPayload);
      dispatch(createUserSuccess(newUser));
    } catch (error) {
      dispatch(createUserFail(error));
      return Promise.reject();
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: t.CREATE_USER_SUCCESS,
    newUser
  };
}

function createUserFail(error) {
  return {
    type: t.CREATE_USER_FAIL,
    error
  };
}

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_CURRENT_USER_REQUEST });
      let token = getToken();
      let decoded = jwtDecode(token);
      let currentUser = await callAPI(
        'GET',
        `/users/${decoded.username}`,
        true
      );
      currentUser.first_name =
        currentUser.first_name[0].toUpperCase() +
        currentUser.first_name.slice(1).toLowerCase();
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(fetchCurrentUserFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCurrentUserSuccess(user) {
  return { type: t.FETCH_CURRENT_USER_SUCCESS, user };
}

export function fetchCurrentUserFail(error) {
  return { type: t.FETCH_CURRENT_USER_FAIL, error };
}

export function applyJob(job_id) {
  return async dispatch => {
    try {
      dispatch({ type: t.APPLY_JOB_REQUEST });

      await callAPI('POST', `/jobs/${job_id}/applications`, true);

      dispatch(applyJobSuccess(job_id));
    } catch (error) {
      dispatch(fetchCurrentUserFail(error));
      return Promise.reject();
    }
  };
}

export function applyJobSuccess(job_id) {
  return { type: t.APPLY_JOB_SUCCESS, job_id };
}

export function applyJobFail(error) {
  return { type: t.APPLY_JOB_FAIL, error };
}

export function updateCurrentUser(user) {
  return async dispatch => {
    try {
      dispatch({ type: t.UPDATE_CURRENT_USER_REQUEST });

      await callAPI('PATCH', `users/${user.username}`, true, user);

      dispatch(updateCurrentUserSuccess(user));
    } catch (error) {
      dispatch(updateCurrentUserFail(error));
      return Promise.reject();
    }
  };
}

export function updateCurrentUserSuccess(user) {
  return { type: t.UPDATE_CURRENT_USER_SUCCESS, user };
}

export function updateCurrentUserFail(error) {
  return { type: t.UPDATE_CURRENT_USER_FAIL, error };
}
