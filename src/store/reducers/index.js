import { combineReducers } from 'redux';
import user from './user';
import errors from './errors';

const rootReducer = combineReducers({
  user,
  errors
});

export default rootReducer;
