import { RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_COMMENT,
         RECEIVE_UPDATED_COMMENT,
         REMOVE_COMMENT,
         RECEIVE_MORE_COMMENTS } from '../actions/comment_actions';
import { LOGOUT } from '../actions/session_actions';

const _defaultState = {albums: {}, loading: {}};

const AlbumReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let duped = _.merge({}, state);

  switch( action.type ) {
    case RECEIVE_ALBUM:

      return duped;
    case RECEIVE_ALBUMS:

      return duped;
    case REMOVE_ALBUM:
      
      return duped;
    case LOGOUT:
      return _.merge({}, _defaultState);
    default:
      return state;
  }
};

export default AlbumReducer;
