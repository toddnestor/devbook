import { receiveProfile,
         FETCH_PROFILE,
         FETCH_PROFILE_FRIENDS,
         receiveProfileFriends } from '../actions/profile_actions';
import { fetchProfile, fetchProfileFriends } from '../util/profile_api';

export default ({ getState, dispatch }) => next => action => {
  let success = profile => {
    dispatch( receiveProfile( profile ) );
  };
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_PROFILE:
      fetchProfile( action.username, success, error );
      break;
    case FETCH_PROFILE_FRIENDS:
      success = friends => dispatch(receiveProfileFriends(friends));
      fetchProfileFriends( action.id, success, error );
      break;
  }

  return next(action);
};
