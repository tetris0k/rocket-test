import { combineReducers } from 'redux';
import chatReducer from '../reducers/chat';
import accountsReducer from '../reducers/accounts';
import depositsReducer from '../reducers/deposits';

const rootReducer = combineReducers({
  chat: chatReducer,
  accounts: accountsReducer,
  deposits: depositsReducer
});

export default rootReducer;
