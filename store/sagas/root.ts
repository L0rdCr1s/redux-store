import {all} from 'redux-saga/effects';
import {loginSaga} from '@store/sagas/auth/login';

export function* rootSaga() {
  yield all([loginSaga()]);
}
