import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
//
export function searchForUsers(query) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_USERS_SEARCH_REQUEST });
      let results = await callAPI('GET', `/users?search=${query}`, true);
      dispatch(fetchUsersSearchSuccess(results));
    } catch (error) {
      dispatch(fetchUsersSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchUsersSearchSuccess(results) {
  return { type: t.FETCH_USERS_SEARCH_SUCCESS, results };
}

export function fetchUsersSearchFail(error) {
  return { type: t.FETCH_USERS_SEARCH_FAIL, error };
}

export function searchForCompanies(query) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_COMPANIES_SEARCH_REQUEST });
      let results = await callAPI('GET', `/companies?search=${query}`, true);
      dispatch(fetchCompaniesSearchSuccess(results));
    } catch (error) {
      dispatch(fetchCompaniesSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCompaniesSearchSuccess(results) {
  return { type: t.FETCH_COMPANIES_SEARCH_SUCCESS, results };
}

export function fetchCompaniesSearchFail(error) {
  return { type: t.FETCH_COMPANIES_SEARCH_FAIL, error };
}

export function searchForJobs(query) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_JOBS_SEARCH_REQUEST });
      let results = await callAPI('GET', `/jobs?search=${query}`, true);
      dispatch(fetchJobSearchSuccess(results));
    } catch (error) {
      dispatch(fetchJobSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchJobSearchSuccess(results) {
  return { type: t.FETCH_JOBS_SEARCH_SUCCESS, results };
}

export function fetchJobSearchFail(error) {
  return { type: t.FETCH_JOBS_SEARCH_FAIL, error };
}
