import { all } from 'redux-saga/effects';
import authSaga from './auth';
import profileSaga from './profile';
import messagesSaga from './messages';
import websocketSaga from './websocket';

export default function* rootSaga(extraArguments) {
  yield all([
    authSaga(extraArguments),
    profileSaga(extraArguments),
    messagesSaga(extraArguments),
    websocketSaga(extraArguments)
  ]);
}
