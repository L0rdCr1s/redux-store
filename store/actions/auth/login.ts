import {LoginInput, User} from '@store/types/auth';
import {LOGIN, USER} from '@store/constants/auth';

export const storeUser = (user: User) => {
  return {
    type: USER.STORE_INFO,
    payload: user,
  };
};

export const storeToken = (token: string | null) => {
  return {
    type: USER.STORE_TOKEN,
    payload: token,
  };
};

export const storeLoginInfo = (loginInfo: LoginInput) => {
  return {
    type: LOGIN.STORE_INFO,
    payload: loginInfo,
  };
};
