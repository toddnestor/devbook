import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { LOGOUT } from '../actions/session_actions';

const _defaultState = [];

const PhotosReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let duped = _.merge([], state);

  switch( action.type ) {
    case RECEIVE_PHOTOS:
      return action.photos;
      return duped;
    case LOGOUT:
      return _.merge([], _defaultState);
    default:
      return state;
  }
};

export default PhotosReducer;
