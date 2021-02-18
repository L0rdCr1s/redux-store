import {ERRORS} from '@store/constants/auth';
import {Errors} from '@store/types/auth';

export const showErrors = (errors: Array<Errors>) => {
  return {
    type: ERRORS.SHOW,
    payload: errors,
  };
};

export const hideErrors = () => {
  return {
    type: ERRORS.HIDE,
  };
};
