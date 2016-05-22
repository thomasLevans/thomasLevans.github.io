import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import configureStore from './store';
import App from './components/app';
import { Who } from './components/who';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/who' component={Who} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
