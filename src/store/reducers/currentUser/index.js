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
    case t.LOGOUT:
      return DEFAULT_STATE;
    case t.CREATE_USER_SUCCESS:
      return { ...state, ...action.newUser };
    default:
      return state;
  }
}
