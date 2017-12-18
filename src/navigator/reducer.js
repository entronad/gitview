import { AppNavigator } from './index'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
