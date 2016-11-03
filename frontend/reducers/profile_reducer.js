import { RECEIVE_PROFILE } from '../actions/profile_actions';

const _defaultState = {};

const ProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case RECEIVE_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export default ProfileReducer;
