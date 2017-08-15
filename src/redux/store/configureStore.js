import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../rootReducer';
import { routerMiddleware } from 'react-router-redux';

const nextRootReducer = require('../rootReducer');
const browserHistory = createHistory();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
