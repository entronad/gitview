const initalState = {

};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    // 读取accessToken
    case 'READ_ACCESS_TOKEN.PENDING':
      return {
        ...state,
        accessTokenRead: false,
      };

    default:
      return state;
  }
};
