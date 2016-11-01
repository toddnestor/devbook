import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

window._ = require('lodash');

document.addEventListener('DOMContentLoaded', () => {
  let preconfiguredStore = {};

  if( window.currentUser ) {
    preconfiguredStore = {session: {currentUser: window.currentUser, errors: []}};
  }

  const store = configureStore(preconfiguredStore);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
