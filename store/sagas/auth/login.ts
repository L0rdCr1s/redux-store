import {LoginInput, LoginResponse} from '@store/types/auth';
import {
  actionWithoutPayload,
  activityFailed,
} from '@store/actions/publicActions';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {storeToken, storeUser} from '@store/actions/auth/login';

import {LOGIN} from '@store/constants/auth';
import {LoginStateValues} from '@store/reducers/login';
import {loginUser} from '@store/actions/auth/api';
import {serverError} from '@store/constants/shared';

const getLoginInfo = (state: LoginStateValues): LoginInput | undefined =>
  state.loginInfo;

function* _loginUser() {
  let loginInfo: LoginInput = yield select(getLoginInfo);

  try {
    let {success, errors, user, token}: LoginResponse = yield call(
      loginUser,
      loginInfo,
    );

    if (success && user && token) {
      yield put(storeToken(token));
      yield put(storeUser(user));
      yield put(actionWithoutPayload(LOGIN.LOGIN_SUCCESSFUL));
    }

    if (errors) {
      yield put(activityFailed(LOGIN.LOGIN_FAILED, errors));
    }
  } catch {
    yield put(activityFailed(LOGIN.LOGIN_FAILED, serverError));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN.LOGIN, _loginUser);
}
