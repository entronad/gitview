import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

const middlewares = [
  reduxThunk,
];

export default createStore(
  reducer,
  applyMiddleware(...middlewares)
);