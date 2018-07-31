import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error
});

export default rootReducer;
