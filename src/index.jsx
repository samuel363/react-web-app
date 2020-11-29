import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';

import Page from './views/layout/page';

import history from './history';
import configureStore from './redux/store/store';

import registerServiceWorker from './registerServiceWorker';

import './stylesheets/main.scss';


const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Page />
    </Provider>
  </Router>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
registerServiceWorker();
