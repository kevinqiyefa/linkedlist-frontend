import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  userResults: [],
  companiesResults: [],
  jobsResults: []
};

export default function search(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USERS_SEARCH_SUCCESS:
      return {
        ...state,
        userResults: action.results,
        companiesResults: [],
        jobsResults: []
      };
    case t.FETCH_COMPANIES_SEARCH_SUCCESS:
      return {
        ...state,
        companiesResults: action.results,
        userResults: [],
        jobsResults: []
      };

    case t.FETCH_JOBS_SEARCH_SUCCESS:
      return {
        ...state,
        companiesResults: [],
        userResults: [],
        jobsResults: action.results
      };
    default:
      return state;
  }
}
