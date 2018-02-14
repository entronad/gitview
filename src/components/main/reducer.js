import {
  GET_VIEWER,
} from './type';

const initalState = {
  viewer: null,
};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_VIEWER.SUCCESS:
      return {
        ...state,
        viewer: action.payload.viewer,
      };

    default:
      return state;
  }
};
