import { combineReducers } from 'redux';
import chatReducer from '../reducers/chat';
import accountsReducer from '../reducers/accounts';

const rootReducer = combineReducers({
  chat: chatReducer,
  accounts: accountsReducer
});

export default rootReducer;
