import { queryViewer } from 'api';
import {
  GET_VIEWER,
} from './type';

export const getViewer = () => async (dispatch, getState) => {
  const { accessToken } = getState().auth;
  dispatch({ type: GET_VIEWER.PENDING });
  const response = await queryViewer(accessToken);
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
