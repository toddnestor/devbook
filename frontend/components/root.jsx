import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if( store.getState().session.currentUser ) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/login" component={SessionFormContainer} />
      </Router>
    </Provider>
  );
}

export default Root;

/*
<IndexRoute component={SearchContainer} />
<Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
<Route path="benches/new" component={BenchFormContainer} />
*/
