import { RECEIVE_PROFILE } from '../actions/profile_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';

const _defaultState = {};

const ProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case RECEIVE_PROFILE:
      return action.profile;
    case UPDATE_FRIENDSHIP_STATUS:
      return _.merge({}, state, {friend_status: action.status});
    default:
      return state;
  }
};

export default ProfileReducer;
