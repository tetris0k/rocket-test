import { combineReducers } from 'redux';
import chatReducer from '../modules/chat/ChatState';

const rootReducer = combineReducers({
  chat: chatReducer
});

export default rootReducer;
