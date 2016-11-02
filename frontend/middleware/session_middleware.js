import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         DEMO_LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, demoLogin, signup, logout } from '../util/session_api';
import { browserHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const success = user => {
    dispatch( receiveCurrentUser( user ) );
    browserHistory.push('/');
  }
  const error = xhr => dispatch( receiveErrors( xhr.responseJSON ) );

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
      break;
    case DEMO_LOGIN:
      demoLogin(success, error);
      break;
    case LOGOUT:
      logout(() => browserHistory.push('/login'));
      break;
    case SIGNUP:
      signup(action.user, success, error);
      break;
  }

  return next(action);
};
