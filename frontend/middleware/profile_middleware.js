import { receiveProfile, FETCH_PROFILE } from '../actions/profile_actions';
import { fetchProfile } from '../util/profile_api';

export default ({ getState, dispatch }) => next => action => {
  const success = profile => {
    dispatch( receiveProfile( profile ) );
  };
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_PROFILE:
      fetchProfile( action.username, success, error );
      break;
  }

  return next(action);
};
