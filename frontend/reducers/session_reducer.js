import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CONFIRM_SAVED } from '../actions/session_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let currentUser;

  switch( action.type ) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.user,
        errors: []
      }
      break;
    case RECEIVE_ERRORS:
      return _.merge({}, state, {errors: action.errors});
      break;
    case CONFIRM_SAVED:
      currentUser = _.merge({}, state.currentUser);
      currentUser.saved = null;
      return _.merge({}, state, {currentUser});
      break;
    case UPDATE_FRIENDSHIP_STATUS:
      currentUser = _.merge({}, state.currentUser);

      let userToUpdate = _.find(currentUser.friends, {id: action.user.id});

      if( userToUpdate ) {
        userToUpdate.friend_status = action.status;
        userToUpdate.friend_count++;
      }

      return _.merge({}, state, {currentUser});
      break;
    case LOGOUT:
      return _.merge({}, state, {currentUser: null});
      break;
    default:
      return state;
  }
}

export default SessionReducer;
