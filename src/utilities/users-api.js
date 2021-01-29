import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
// this is for testing purposes only!!!!
export function checkToken(params) {
  return sendRequest(`${BASE_URL}/check-token`);
}

