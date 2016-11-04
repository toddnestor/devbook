import { RECEIVE_USERS, FETCH_USERS } from '../actions/users_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';

const _defaultState = {
  users: {},
  loading: false
};

const UsersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case FETCH_USERS:
      return _.merge({}, state, {loading: true});
    case RECEIVE_USERS:
      return {users: action.users, loading: false};
    case UPDATE_FRIENDSHIP_STATUS:
      let userToUpdate = _.merge({}, state[action.user.id]);
      userToUpdate.friend_status = action.status;
      return _.merge({}, state, {[userToUpdate.id]: userToUpdate});
    default:
      return state;
  }
};

export default UsersReducer;
