import { NavigationActions } from 'react-navigation';

export const createActionSet = actionName => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
});

export const resetNavigationTo = (routeName, navigation) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName })],
  });

  navigation.dispatch(resetAction);
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const ensureDelay = (delayed, ms) =>
  Promise
    .all([delayed, sleep(ms)])
    .then(([data]) => data);
