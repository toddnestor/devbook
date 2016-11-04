import { receiveUsers, FETCH_USERS } from '../actions/users_actions';
import { fetchUsers } from '../util/users_api';

export default ({ getState, dispatch }) => next => action => {
  const success = users => {
    dispatch( receiveUsers( users ) );
  };
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_USERS:
      fetchUsers( success, error );
      break;
  }

  return next(action);
};
