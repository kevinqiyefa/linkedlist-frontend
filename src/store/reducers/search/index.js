import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  results: []
};

export default function search(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USER_SEARCH_SUCCESS:
      return {
        ...state,
        results: [...action.results]
      };
    default:
      return state;
  }
}
