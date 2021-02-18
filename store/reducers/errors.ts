import {AnyAction} from 'redux';
import {ERRORS} from '@store/constants/auth';
import {Errors} from '@store/types/auth';

export interface ErrorStateValues {
  errors: Array<Errors>;
  showErrors: boolean;
  errorsStore: ErrorStateValues;
}

const ErrorsState: ErrorStateValues = {
  errors: [],
  showErrors: false,
};

export const errorsReducer = (
  state: ErrorStateValues = ErrorsState,
  action: AnyAction,
) => {
  switch (action.type) {
    case ERRORS.SHOW:
      return {errors: action.payload, showErrors: true};

    case ERRORS.HIDE:
      return {errors: [], showErrors: false};

    default:
      return state;
  }
};
