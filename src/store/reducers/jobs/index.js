import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function jobsReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_JOBS_SUCCESS: {
      return action.jobs;
    }
    default:
      return state;
  }
}
