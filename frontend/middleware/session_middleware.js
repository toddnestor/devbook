import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         DEMO_LOGIN,
         LOGOUT,
         SIGNUP,
         UPDATE_USER
       } from '../actions/session_actions';

import { login, demoLogin, signup, logout, updateUser } from '../util/session_api';
import { browserHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  let success = user => {
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
      next(action);
      browserHistory.push('/login');
      logout(() => {});
      return;
    case UPDATE_USER:
      success = user => {
        user.saved = true;
        dispatch(receiveCurrentUser(user))
      };

      updateUser(action.user, success, error);
      break;
    case SIGNUP:
      signup(action.user, success, error);
      break;
  }

  return next(action);
};
