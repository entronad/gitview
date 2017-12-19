import {
  READ_ACCESS_TOKEN,
  LOGIN,
} from './type';

export const initalState = {
  authorized: false,
  accessToken: null,
  errorMessage: null,

  splashFinished: false,
  accessTokenRead: false,

  logining: false,
}

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case READ_ACCESS_TOKEN.PENDING:
    return {
      ...state,
      accessTokenRead: false,
    };
    case READ_ACCESS_TOKEN.SUCCESS:
    return {
      ...state,
      accessTokenRead: true,
      authorized: true,
      accessToken: action.payload.accessToken,
    };
    case READ_ACCESS_TOKEN.ERROR:
    return {
      ...state,
      accessTokenRead: true,
      authorized: false,
      errorMessage: action.payload.errorMessage,
    };

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