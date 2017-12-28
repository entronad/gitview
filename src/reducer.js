import { combineReducers } from 'redux';

import navReducer from './components/nav/reducer'
import authReducer from './components/auth/reducer';
import mainReducer from './components/main/reducer';

export default combineReducers({
  nav: navReducer,
  auth: authReducer,
  main: mainReducer,
});