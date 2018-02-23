import {
  GET_VIEWER,
  SET_MODULE,
} from './type';

const initalState = {
  viewer: null,
  module: 'Dashboard',
};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_VIEWER.SUCCESS:
      return {
        ...state,
        viewer: action.payload.viewer,
      };

    case SET_MODULE:
      return {
        ...state,
        module: action.payload.module,
      };

    default:
      return state;
  }
};
