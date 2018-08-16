import { FETCH_DIALOGS_SUCCESS, FETCH_DIALOGS_FAILURE } from '../constants/messages';

const initialState = {
  dialogs: [],
  dialogListError: ''
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DIALOGS_SUCCESS:
      return {
        ...state,
        dialogs: action.payload,
        dialogListError: ''
      };

    case FETCH_DIALOGS_FAILURE:
      return {
        ...initialState,
        dialogListError: 'Cannot fetch dialog list' // TODO:
      };

    default:
      return state;
  }
}
