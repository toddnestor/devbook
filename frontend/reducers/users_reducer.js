import { RECEIVE_USERS, FETCH_USERS, SEARCH_USERS, RECEIVE_FOUND_USERS } from '../actions/users_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';
import { LOGOUT } from '../actions/session_actions';
import _ from 'lodash';

const _defaultState = {
  users: {},
  searchResults: [],
  loading: false,
  searching: false
};

const UsersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let duped = _.merge({}, state);

  switch( action.type ) {
    case FETCH_USERS:
      return _.merge({}, state, {loading: true});
    case RECEIVE_USERS:
      return _.merge({}, state, {users: action.users, loading: false});
    case UPDATE_FRIENDSHIP_STATUS:
      duped = _.merge({}, state);
      let userToUpdate = duped.users[action.user.id];

      if( userToUpdate ) {
        userToUpdate.friend_status = action.status;
        userToUpdate.friend_count++;
      }

      userToUpdate = _.find(duped.searchResults, {id: action.user.id});

      if( userToUpdate ) {
        userToUpdate.friend_status = action.status;
        userToUpdate.friend_count++;
      }

      return duped;
    case SEARCH_USERS:
      return _.merge({}, state, {searching: true});
    case RECEIVE_FOUND_USERS:
      let duped = _.merge({}, state);
      duped.searchResults = [];
      return _.merge({}, duped, {searchResults: action.users, searching: false});
    case LOGOUT:
      return _.merge({}, _defaultState);
    default:
      return state;
  }
};

export default UsersReducer;
