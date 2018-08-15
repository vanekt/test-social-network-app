import { INIT_FAILURE, INIT_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/user';

const initialState = {
  isInit: false,
  userId: null,
  loginFormError: ''
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        isInit: true,
        userId: action.payload
      };

    case INIT_FAILURE:
      return {
        ...state,
        isInit: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginFormError: ''
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginFormError: action.payload
      };

    default:
      return state;
  }
}
