import { queryViewer } from 'api';
import {
  GET_VIEWER,
  SET_MODULE,
} from './type';

export const getViewer = () => async (dispatch, getState) => {
  const { accessToken } = getState().auth;
  dispatch({ type: GET_VIEWER.PENDING });
  const response = await queryViewer(accessToken);
  console.log(response);
  if (response.ok) {
    dispatch({
      type: GET_VIEWER.SUCCESS,
      payload: {
        viewer: response.body.viewer,
      },
    });
    return response;
  }
  dispatch({
    type: GET_VIEWER.ERROR,
    payload: {
      errorMessage: response.body.message,
    },
  });
  return response;
};

export const setModule = module => (dispatch) => {
  dispatch({
    type: SET_MODULE,
    payload: {
      module,
    },
  });
};
