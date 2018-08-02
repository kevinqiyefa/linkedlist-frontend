import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  userResults: [],
  companiesResults: [],
  jobsResults: []
};

export default function search(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USER_SEARCH_SUCCESS:
      return {
        ...state,
        userResults: action.results,
        companiesResults: [],
        jobsResults: []
      };
    default:
      return state;
  }
}
