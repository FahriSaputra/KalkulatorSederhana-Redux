import {createStore, applyMiddleware,compose} from 'redux';
import combineReducer from './Reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}


const store = createStore(
  combineReducer,
  compose(applyMiddleware(...middleware)),
);

const getStore = () => store;
const getState = () => store.getState();

export {getState, getStore};