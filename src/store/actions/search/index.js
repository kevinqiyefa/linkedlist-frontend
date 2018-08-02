import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
//
export function searchForUsers(query) {
  return async dispatch => {
    try {
      debugger;
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

export function searchForCompanies(query) {
  return async dispatch => {
    try {
      debugger;
      dispatch({ type: t.FETCH_COMPANY_SEARCH_REQUEST });
      let results = await callAPI('GET', `/companies?search=${query}`, true);
      dispatch(fetchCompanySearchSuccess(results));
    } catch (error) {
      dispatch(fetchCompanySearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCompanySearchSuccess(results) {
  return { type: t.FETCH_COMPANY_SEARCH_SUCCESS, results };
}

export function fetchCompanySearchFail(error) {
  return { type: t.FETCH_COMPANY_SEARCH_FAIL, error };
}
