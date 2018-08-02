import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
//
export function searchForUsers(query) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_USER_SEARCH_REQUEST });
      let results = await callAPI('GET', `/users?search=${query}`, true);
      dispatch(fetchUserSearchSuccess(results));
    } catch (error) {
      dispatch(fetchUserSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchUserSearchSuccess(results) {
  return { type: t.FETCH_USER_SEARCH_SUCCESS, results };
}

export function fetchUserSearchFail(error) {
  return { type: t.FETCH_USER_SEARCH_FAIL, error };
}
