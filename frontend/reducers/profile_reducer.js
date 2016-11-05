import { RECEIVE_PROFILE, RECEIVE_PROFILE_FRIENDS } from '../actions/profile_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';
import { LOGOUT } from '../actions/session_actions';

const _defaultState = {};

const ProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case RECEIVE_PROFILE:
      return action.profile;
    case UPDATE_FRIENDSHIP_STATUS:
      return _.merge({}, state, {friend_status: action.status, friend_count: state.friend_count + 1});
    case RECEIVE_PROFILE_FRIENDS:
      let duped = _.merge({}, state);
      duped.friends = _.values(action.friends);
      return duped;
    case LOGOUT:
      return _.merge({}, _defaultState);
    default:
      return state;
  }
};

export default ProfileReducer;
