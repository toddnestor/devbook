import { receiveUsers, FETCH_USERS, SEARCH_USERS, receiveFoundUsers } from '../actions/users_actions';
import { fetchUsers, searchUsers } from '../util/users_api';

export default ({ getState, dispatch }) => next => action => {
  let success = users => {
    dispatch( receiveUsers( users ) );
  };
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_USERS:
      fetchUsers( success, error );
      break;
    case SEARCH_USERS:
      success = users => {
        dispatch( receiveFoundUsers(users));
      };

      searchUsers(action.search, success, error);
      break;
  }

  return next(action);
};
