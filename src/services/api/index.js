import axios from 'axios';
import { getToken } from '../token';

// set up global API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// set up an instance of axios configured to the API url
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * A wrapper around an Axios API call that works with auth and formats errors.
 *  The return value is the response payload; no "data" key is necessary
 * @param {String} method the HTTP verb you want to use (case insensitive)
 * @param {String} path the route path /endpoint
 * @param {Boolean} authRequired does this request require authentication
 * @param {Object} payload (optional) data in JSON form for POST requests
 * @returns {*} response data
 */

export async function callAPI(method, path, authRequired, payload) {
  // set up headers specifically for this request
  const requestHeaders = {};
  if (authRequired) {
    requestHeaders.Authorization = `Bearer ${getToken()}`;
  }

  try {
    method = method.toLowerCase();
    const methods = new Set(['get', 'post', 'patch', 'delete']);
    if (!methods.has(method)) {
      throw new Error(
        'You can only call the API with one of the following methods: `GET`, `POST`, `PATCH`, `DELETE`'
      );
    }

    const response = await api.request({
      method,
      url: path,
      headers: requestHeaders,
      data: payload
    });

    // no need to reference the .data object when using this method
    return response.data;
  } catch (err) {
    let processedError = parseAPIError(err);
    return Promise.reject(processedError);
  }
}

export function parseAPIError(error) {
  if (error.response && error.response.data) {
    // if it's coming from the API itself
    return error.response.data.message;
  } else {
    // if it's an internal code error
    return error.message;
  }
}
