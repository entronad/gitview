import { combineReducers } from 'redux';

import navReducer from './navigator/reducer'
import authReducer from './components/auth/reducer';

export default combineReducers({
  nav: navReducer,
  auth: authReducer,
});