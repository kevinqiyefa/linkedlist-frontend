import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import search from './search';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error,
  search
});

export default rootReducer;
