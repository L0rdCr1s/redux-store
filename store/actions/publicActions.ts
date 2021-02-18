import {Errors} from '@store/types/auth';

export const activityFailed = (type: string, errors: Array<Errors>) => {
  return {
    type: type,
    payload: errors,
  };
};

export const actionWithoutPayload = (type: string) => {
  return {
    type: type,
  };
};
