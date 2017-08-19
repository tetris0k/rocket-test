import { combineReducers } from 'redux';
import chatReducer from '../reducers/chat';

const rootReducer = combineReducers({
  chat: chatReducer
});

export default rootReducer;
