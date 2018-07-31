import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import errors from './errors';
import jobs from './jobs';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  errors
});

export default rootReducer;
