import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

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
    case LOGOUT:
      return _.merge({}, state, {currentUser: null});
      break;
    default:
      return state;
  }
}

export default SessionReducer;
