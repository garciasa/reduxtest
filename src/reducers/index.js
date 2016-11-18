
import { combineReducers } from 'redux';

import ButtonReducer from './ButtonReducer';

export default combineReducers({
  messages: ButtonReducer,
});
