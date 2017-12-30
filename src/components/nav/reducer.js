import { RootNavigator } from './AppNavigator';

const initialAction = RootNavigator.router.getActionForPathAndParams('Splash');
const initialState = RootNavigator.router.getStateForAction(initialAction);

export default (state = initialState, action = {}) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
