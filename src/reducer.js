import { combineReducers } from 'redux';

import authReducer from './components/auth/reducer';

export default combineReducers({
  auth: authReducer,
});