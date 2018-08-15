import {
  INIT_FAILURE,
  INIT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from '../constants/user';

const initialState = {
  isInit: false,
  id: null,
  name: '',
  image: '',
  loginFormError: ''
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        isInit: true,
        id: action.payload.id,
        name: action.payload.fullname,
        image: action.payload.image
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

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isInit: true
      };

    default:
      return state;
  }
}
