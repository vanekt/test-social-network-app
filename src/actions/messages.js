import { FETCH_DIALOGS_REQUEST } from '../constants/messages';

export const fetchDialogs = payload => ({
  type: FETCH_DIALOGS_REQUEST,
  payload
});
