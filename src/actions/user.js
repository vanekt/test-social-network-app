import { INIT_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from '../constants/user';

export const initUserRequest = () => ({
  type: INIT_REQUEST
});

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload
});

export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload
});
