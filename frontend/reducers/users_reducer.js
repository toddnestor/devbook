import { RECEIVE_USERS, FETCH_USERS } from '../actions/users_actions';

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
    default:
      return state;
  }
};

export default UsersReducer;
