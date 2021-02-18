import {User} from '@store/types/auth';
import {AnyAction} from 'redux';
import {USER} from '@store/constants/auth';

export interface UserStateValues {
  userInfo?: User;
  token: string;
  userStore?: UserStateValues;
}

const UserState: UserStateValues = {
  token: '',
};

export const userReducer = (
  state: UserStateValues = UserState,
  action: AnyAction,
) => {
  switch (action.type) {
    case USER.STORE_INFO:
      return {...state, userInfo: action.payload};

    case USER.STORE_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};
