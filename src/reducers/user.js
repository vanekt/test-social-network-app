import { INIT_FAILURE, INIT_SUCCESS } from '../constants/user';

const initialState = {
  isInit: false,
  userId: null
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

    default:
      return state;
  }
}
