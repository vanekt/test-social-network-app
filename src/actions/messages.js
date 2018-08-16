import {
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOG_MESSAGES_REQUEST,
  SEND_MESSAGE_REQUEST
} from '../constants/messages';

export const fetchDialogs = payload => ({
  type: FETCH_DIALOGS_REQUEST,
  payload
});

export const fetchDialogMessages = payload => ({
  type: FETCH_DIALOG_MESSAGES_REQUEST,
  payload
});

export const sendMessage = payload => ({
  type: SEND_MESSAGE_REQUEST,
  payload
});
