import { put, takeLatest } from 'redux-saga/effects';
import {
  WS_ONMESSAGE,
  WS_MESSAGE_TYPE_CREATE_MESSAGE_SUCCESS,
  WS_MESSAGE_TYPE_NEW_MESSAGE
} from '../constants/websocket';
import { SEND_MESSAGE_SUCCESS, NEW_MESSAGE_RECEIVED } from '../constants/messages';

function* onMessage({ api }, { payload }) {
  const messageData = JSON.parse(payload.data);
  switch (messageData.type) {
    case WS_MESSAGE_TYPE_CREATE_MESSAGE_SUCCESS:
      yield put({ type: SEND_MESSAGE_SUCCESS, payload: messageData.payload });
      break;
    case WS_MESSAGE_TYPE_NEW_MESSAGE:
      yield put({ type: NEW_MESSAGE_RECEIVED, payload: messageData.payload });
      break;
    default:
      // TODO
      console.log('Wrong ws message type: ', messageData.type);
  }
}

export default function*(ea) {
  yield takeLatest(WS_ONMESSAGE, onMessage, ea);
}
