import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_FRIENDS_SUCCESS
} from '../constants/profile';

const initialState = {
  username: '',
  image: null,
  id: null,
  isLoading: true,
  error: '',
  friends: []
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.fullname,
        image: action.payload.image,
        id: action.payload.id,
        isLoading: false,
        error: ''
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Failed to load user profile' // TODO
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };

    default:
      return state;
  }
}
