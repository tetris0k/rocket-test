import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import routes from './routes';
import store from './redux/store';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = syncHistoryWithStore(createHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
