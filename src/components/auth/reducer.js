import {
  LOGIN,
} from './type';

export const initalState = {
  logining: false,
  authorized: false,
  accessToken: null,
  errorMessage: null,
}

export const authReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case LOGIN.PENDING:
      return {
        ...state,
        logining: true,
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        logining: false,
        authorized: true,
        accessToken: action.payload.accessToken,
      };
    case LOGIN.ERROR:
      return {
        ...state,
        logining: false,
        authorized: false,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}