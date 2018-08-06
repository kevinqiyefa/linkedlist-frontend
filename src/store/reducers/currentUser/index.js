import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
  photo: '',
  current_company: '',
  applied_to: []
};

export default function currentUser(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    case t.APPLY_JOB_SUCCESS:
      return {
        ...state,
        applied_to: [...state.applied_to, action.job_id]
      };
    case t.LOGOUT:
      return DEFAULT_STATE;
    case t.CREATE_USER_SUCCESS:
      return { ...state, ...action.newUser };
    case t.UPDATE_CURRENT_USER_SUCCESS:
      return { ...state, ...action.user, password: '' };
    default:
      return state;
  }
}
