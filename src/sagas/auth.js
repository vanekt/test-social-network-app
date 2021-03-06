import { put, takeLatest, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants/user';
import { connectWS, disconnectWS } from '../actions/websocket';

function* initUser({ api }) {
  try {
    const resp = yield call(api.auth.checkAuth);
    if (!resp.success) {
      throw resp.error ? resp.error : new Error('user is unauthorized');
    }

    yield put(connectWS());
    yield put({ type: INIT_SUCCESS, payload: resp.payload });
  } catch (e) {
    yield put({ type: INIT_FAILURE });
  }
}

function* login({ api }, { payload }) {
  try {
    const resp = yield call(api.auth.login, payload.username, payload.password);
    if (!resp.success) {
      throw new Error('User not found');
    }

    yield put({ type: LOGIN_SUCCESS });
    yield put({ type: INIT_REQUEST });
  } catch (e) {
    yield put({ type: LOGIN_FAILURE, payload: e.message });
  }
}

function* logout({ api }, { payload }) {
  try {
    yield call(api.auth.logout);
    yield put({ type: LOGOUT_SUCCESS });
    yield put(disconnectWS());
    yield put(push('/'));
  } catch (e) {
    yield put({ type: LOGOUT_FAILURE, payload: e.message });
  }
}

export default function*(ea) {
  yield takeLatest(INIT_REQUEST, initUser, ea);
  yield takeLatest(LOGIN_REQUEST, login, ea);
  yield takeLatest(LOGOUT_REQUEST, logout, ea);
}
