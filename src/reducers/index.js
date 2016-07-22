import { combineReducers } from 'redux';
import whoresReducer from './whores';

const rootReducer = combineReducers({
  whores: whoresReducer
});

export default rootReducer;
