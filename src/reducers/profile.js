import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../constants/profile';

const initialState = {
  username: ''
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.fullname
      };

    case FETCH_USER_FAILURE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
