import { all } from 'redux-saga/effects';
import authSaga from './auth';
import profileSaga from './profile';
import messagesSaga from './messages';

export default function* rootSaga(extraArguments) {
  yield all([authSaga(extraArguments), profileSaga(extraArguments), messagesSaga(extraArguments)]);
}
