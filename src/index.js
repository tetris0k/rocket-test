import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';
import { browserHistory } from './redux/store/configureStore';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
