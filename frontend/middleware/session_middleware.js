import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api';
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
    case LOGOUT:
      logout(() => next(action));
      return;
      break;
    case SIGNUP:
      signup(action.user, success, error);
      break;
  }

  return next(action);
};
