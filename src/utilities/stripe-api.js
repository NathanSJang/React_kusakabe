import sendRequest from './send-request';

const BASE_URL = '/api/stripe';

export function checkOut(userId) {
  return sendRequest(BASE_URL, 'POST', userId)
}