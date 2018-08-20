import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOGS_SUCCESS,
  FETCH_DIALOGS_FAILURE,
  FETCH_DIALOG_MESSAGES_REQUEST,
  FETCH_DIALOG_MESSAGES_SUCCESS,
  FETCH_DIALOG_MESSAGES_FAILURE,
  SEND_MESSAGE_REQUEST
} from '../constants/messages';
import { sendWS } from '../actions/websocket';

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

    const peerUserResp = yield call(api.profile.getUserById, payload.peerId);
    if (!peerUserResp.success) {
      throw peerUserResp.error
        ? peerUserResp.error
        : new Error('Cannot get peer user data by peerId');
    }

    yield put({
      type: FETCH_DIALOG_MESSAGES_SUCCESS,
      payload: { messages: resp.payload, peerUserData: peerUserResp.payload }
    });
  } catch (e) {
    yield put({ type: FETCH_DIALOG_MESSAGES_FAILURE });
  }
}

function* sendMessage({ api }, { payload }) {
  try {
    yield put(sendWS(payload));
  } catch (e) {
    console.log('SEND_MESSAGE_FAILURE', e);
    // TODO
    // yield put({ type: SEND_MESSAGE_FAILURE });
  }
}

export default function*(ea) {
  yield takeLatest(FETCH_DIALOGS_REQUEST, fetchDialogs, ea);
  yield takeLatest(FETCH_DIALOG_MESSAGES_REQUEST, fetchDialogMessages, ea);
  yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage, ea);
}
