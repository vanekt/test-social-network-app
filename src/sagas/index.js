import { all } from 'redux-saga/effects';
import authSaga from './auth';
import profileSaga from './profile';

export default function* rootSaga(extraArguments) {
  yield all([
    authSaga(extraArguments),
    profileSaga(extraArguments)
  ]);
}
