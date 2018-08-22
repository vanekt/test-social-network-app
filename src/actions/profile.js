import { FETCH_USER_REQUEST, FETCH_FRIENDS_REQUEST } from '../constants/profile';

export const fetchProfileUser = payload => ({
  type: FETCH_USER_REQUEST,
  payload
});

export const fetchFriends = payload => ({
  type: FETCH_FRIENDS_REQUEST,
  payload
});
