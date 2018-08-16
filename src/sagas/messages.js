import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOGS_SUCCESS,
  FETCH_DIALOGS_FAILURE,
  FETCH_DIALOG_MESSAGES_REQUEST,
  FETCH_DIALOG_MESSAGES_SUCCESS,
  FETCH_DIALOG_MESSAGES_FAILURE
} from '../constants/messages';

function* fetchDialogs({ api }, { payload }) {
  try {
    const resp = yield call(api.messages.getDialogsByUserId, payload);
    if (!resp.success) {
      throw resp.error ? resp.error : new Error('Cannot fetch dialogs by userId');
    }

    yield put({ type: FETCH_DIALOGS_SUCCESS, payload: resp.payload });
  } catch (e) {
    yield put({ type: FETCH_DIALOGS_FAILURE });
  }
}

function* fetchDialogMessages({ api }, { payload }) {
  try {
    const resp = yield call(api.messages.getDialogMessages, payload.userId, payload.peerId);
    if (!resp.success) {
      throw resp.error ? resp.error : new Error('Cannot fetch messages by userId and peerId');
    }

    yield put({ type: FETCH_DIALOG_MESSAGES_SUCCESS, payload: resp.payload });
  } catch (e) {
    yield put({ type: FETCH_DIALOG_MESSAGES_FAILURE });
  }
}

export default function*(ea) {
  yield takeLatest(FETCH_DIALOGS_REQUEST, fetchDialogs, ea);
  yield takeLatest(FETCH_DIALOG_MESSAGES_REQUEST, fetchDialogMessages, ea);
}
