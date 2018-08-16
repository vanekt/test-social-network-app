import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_DIALOGS_REQUEST,
  FETCH_DIALOGS_SUCCESS,
  FETCH_DIALOGS_FAILURE
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

export default function*(ea) {
  yield takeLatest(FETCH_DIALOGS_REQUEST, fetchDialogs, ea);
}
