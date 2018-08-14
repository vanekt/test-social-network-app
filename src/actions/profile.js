import { FETCH_USER_REQUEST } from '../constants/profile';

export const fetchProfileUser = payload => ({
  type: FETCH_USER_REQUEST,
  payload
});
