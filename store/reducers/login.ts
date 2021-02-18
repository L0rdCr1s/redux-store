import {Errors, LoginInput} from '@store/types/auth';

import {AnyAction} from 'redux';
import {LOGIN} from '@store/constants/auth';

export interface LoginStateValues {
  loginInfo?: LoginInput;
  token: string;
  isLoggingIn: Boolean;
  errors: Array<Errors>;
}

const LoginState: LoginStateValues = {
  token: '',
  isLoggingIn: false,
  errors: [],
};

export const loginReducer = (
  state: LoginStateValues = LoginState,
  action: AnyAction,
) => {
  switch (action.type) {
    case LOGIN.STORE_INFO:
      return {...state, loginInfo: action.payload};

    case LOGIN.LOGIN:
      return {...state, isLoggingIn: true};

    case LOGIN.LOGIN_SUCCESSFUL:
      return {...state, isLoggingIn: false, errors: []};

    case LOGIN.LOGIN_FAILED:
      return {...state, errors: action.payload, isLoggingIn: false};

    default:
      return state;
  }
};
