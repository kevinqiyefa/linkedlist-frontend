import * as t from '../actionTypes';

export function fetchJobsRequest() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_JOBS_REQUEST });
      let jobs = await apiCall('get', `/jobs`);
      dispatch(fetchJobsSuccess());
    } catch (error) {
      dispatch(fetchJobsFail(error));
      return Promise.reject();
    }
  };
}

export function fetchJobsSuccess(jobs) {
  return { type: t.FETCH_JOBS_SUCCESS, jobs };
}

export function fetchJobsFail(error) {
  return { type: t.FETCH_JOBS_FAIL, error };
}
