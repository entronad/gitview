import { AsyncStorage } from 'react-native';
import { Toast } from 'antd-mobile';
import { AUTH_ACCESS_TOKEN } from 'constants/storageKeys';

import { login as loginApi } from 'api';
import {
  READ_ACCESS_TOKEN,
  LOGIN,
  FINISH_SPLASH,
  LOGOUT,
} from './type';

export const readAccessToken = () => async (dispatch) => {
  dispatch({ type: READ_ACCESS_TOKEN.PENDING });
  let accessToken;
  try {
    accessToken = await AsyncStorage.getItem(AUTH_ACCESS_TOKEN);
  } catch (error) {
    Toast.fail(error.message);
    dispatch({
      type: READ_ACCESS_TOKEN.ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
    return accessToken;
  }
  if (accessToken) {
    dispatch({
      type: READ_ACCESS_TOKEN.SUCCESS,
      payload: {
        accessToken,
      },
    });
    return accessToken;
  }
  dispatch({
    type: READ_ACCESS_TOKEN.ERROR,
    payload: {
      errorMessage: 'accessToken 为空',
    },
  });
  return accessToken;
};


export const splash = ms => async (dispatch) => {
  setTimeout(() => dispatch({
    type: FINISH_SPLASH,
  }), ms);
};

export const login = loginInfo => async (dispatch) => {
  dispatch({ type: LOGIN.PENDING });
  const response = await loginApi(loginInfo);
  if (response.ok) {
    try {
      // 登录成功后立刻写入storage中
      await AsyncStorage.setItem(AUTH_ACCESS_TOKEN, response.body.token);
      dispatch({
        type: LOGIN.SUCCESS,
        payload: {
          accessToken: response.body.token,
        },
      });
      return response;
    } catch (error) {
      Toast.fail(error.message);
      dispatch({
        type: LOGIN.ERROR,
        payload: {
          errorMessage: error.message,
        },
      });
      return response;
    }
  }
  Toast.fail(response.body.message);
  dispatch({
    type: LOGIN.ERROR,
    payload: {
      errorMessage: response.body.message,
    },
  });
  return response;
};

export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem(AUTH_ACCESS_TOKEN);
    dispatch({
      type: LOGOUT.SUCCESS,
    });
  } catch (error) {
    Toast.fail('无法清除 accessToken');
  }
};
