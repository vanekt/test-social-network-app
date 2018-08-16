import { FETCH_DIALOGS_REQUEST, FETCH_DIALOGS_SUCCESS, FETCH_DIALOGS_FAILURE, FETCH_DIALOG_MESSAGES_REQUEST, FETCH_DIALOG_MESSAGES_SUCCESS, FETCH_DIALOG_MESSAGES_FAILURE } from '../constants/messages';

const initialState = {
  dialogs: [],
  isLoadDialogs: false, // TODO use
  dialogListError: '',
  messages: [],
  isLoadMessages: false, // TODO use
  messagesListError: '',
  peerUserData: {}
};

Object.freeze(initialState);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DIALOGS_REQUEST:
      return {
        ...state,
        isLoadDialogs: true
      };

    case FETCH_DIALOGS_SUCCESS:
      return {
        ...state,
        dialogs: action.payload,
        dialogListError: '',
        isLoadDialogs: false
      };

    case FETCH_DIALOGS_FAILURE:
      return {
        ...state,
        dialogListError: 'Cannot fetch dialog list', // TODO:
        isLoadDialogs: false
      };

    case FETCH_DIALOG_MESSAGES_REQUEST:
      return {
        ...state,
        isLoadMessages: true
      };

    case FETCH_DIALOG_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        messagesListError: '',
        peerUserData: action.payload.peerUserData,
        isLoadMessages: false
      };

    case FETCH_DIALOG_MESSAGES_FAILURE:
      return {
        ...state,
        messagesListError: 'Cannot fetch message list', // TODO:
        isLoadMessages: false
      };

    default:
      return state;
  }
}
