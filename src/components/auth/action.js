import {
  LOGIN,
} from './type';
import { login as loginApi } from '../../api';

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