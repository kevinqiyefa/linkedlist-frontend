import * as t from '../actionTypes';

export function setError(error) {
  return {
    type: t.SET_ERROR,
    error
  };
}

export function clearError() {
  return {
    type: t.CLEAR_ERROR
  };
}
