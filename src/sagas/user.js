import { put, takeLatest, call } from 'redux-saga/effects';
import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/user';

// const delay = ms => new Promise(res => setTimeout(res, ms));

function* initUser() {
  try {
    // yield delay(3000);

    yield put({ type: INIT_SUCCESS });
  } catch (e) {
    yield put({ type: INIT_FAILURE });
  }
}

function* login({ api }, { payload }) {
  try {
    const resp = yield call(api.auth.login, payload.username, payload.password);
    if (!resp.success) {
      // TODO check resp code
      throw new Error(resp);
    }

    yield put({ type: LOGIN_SUCCESS });
    yield put({ type: INIT_REQUEST });
  } catch (e) {
    yield put({ type: LOGIN_FAILURE, message: e.message });
  }
}

function* userSaga(ea) {
  yield takeLatest(INIT_REQUEST, initUser, ea);
  yield takeLatest(LOGIN_REQUEST, login, ea);
}

export default userSaga;
