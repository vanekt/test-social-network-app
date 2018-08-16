import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import configureStore from './store';
import sagas from './sagas';
import { initUserRequest } from './actions/user';

import AuthApi from './api/auth';
import ProfileApi from './api/profile';
import MessagesApi from './api/messages';

const api = {
  auth: new AuthApi(''),
  profile: new ProfileApi(''),
  messages: new MessagesApi('')
};

const history = createBrowserHistory();
const store = configureStore({}, history);
store.runSaga(sagas, {
  api
});

store.dispatch(initUserRequest());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
