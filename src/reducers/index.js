import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import videoRequester from './videoRequesterReducer';

const rootReducer = combineReducers({
  videoRequester,
  routing: routerReducer
});

export default rootReducer;



