import { AsyncStorage } from 'react-native';
import { AUTH_ACCESS_TOKEN } from 'constants/storageKeys';
import {
  READ_ACCESS_TOKEN,
  LOGIN,
  FINISH_SPLASH,
} from './type';
import { login as loginApi } from 'api';

export const readAccessToken = () => {
  return async dispatch => {
    dispatch({ type: READ_ACCESS_TOKEN.PENDING });
    let accessToken;
    try {
      accessToken = await AsyncStorage.getItem(AUTH_ACCESS_TOKEN);
    } catch (error) {
      dispatch({
        type: READ_ACCESS_TOKEN.ERROR,
        payload: {
          errorMessage: error.message,
        }
      });
      return accessToken;
    }
    if (accessToken) {
      dispatch({
        type: READ_ACCESS_TOKEN.SUCCESS,
        payload: {
          accessToken,
        }
      });
      return accessToken;
    }
    dispatch({
      type: READ_ACCESS_TOKEN.ERROR,
      payload: {
        errorMessage: '',
      }
    });
    return accessToken;
  }
}

export const splash = (ms) => {
  return async dispatch => {
    setTimeout(() => dispatch({
      type: FINISH_SPLASH,
    }), ms);
  }
}

export const login = (loginInfo) => {
  return async dispatch => {
    dispatch({ type: LOGIN.PENDING });
    const response = await loginApi(loginInfo);
    if (response.ok) {
      dispatch({
        type: LOGIN.SUCCESS,
        payload: {
          accessToken: response.body.token,
        }
      });
    } else {
      dispatch({
        type: LOGIN.ERROR,
        payload: {
          errorMessage: response.body.message,
        }
      });
    }
    return response;
  };
};