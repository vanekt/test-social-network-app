import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from '../constants/profile';

function* fetchUser({ api }, { payload }) {
  try {
    const resp = yield call(api.profile.getUserById, payload);
    if (!resp.success) {
      throw resp.error ? resp.error : new Error('Cannot get user by id');
    }

    yield put({ type: FETCH_USER_SUCCESS, payload: resp.payload });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE });
  }
}

export default function* (ea) {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser, ea);
}
