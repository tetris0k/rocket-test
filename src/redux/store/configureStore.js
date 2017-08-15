import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../rootReducer';

const nextRootReducer = require('../rootReducer');
export const browserHistory = createHistory();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f);
  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
