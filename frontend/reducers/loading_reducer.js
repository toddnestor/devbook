import { CREATE_STATUS,
         UPDATE_STATUS,
         DELETE_STATUS,
         CREATED_STATUS } from '../actions/status_actions';
import { FETCH_FEED, RECEIVE_FEED } from '../actions/feed_actions';
import { FETCH_PROFILE_FRIENDS,
         FETCH_PROFILE,
         RECEIVE_PROFILE_FRIENDS } from '../actions/profile_actions';
import { CREATE_ALBUM,
         RECEIVE_ALBUM,
         FETCH_ALBUM,
         FETCH_ALBUMS,
         FETCH_MY_ALBUMS,
         RECEIVE_ALBUMS } from '../actions/album_actions';

const _defaultState = {albums: {}};
import merge from 'lodash/merge';

const LoadingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let duped = merge({}, state);

  switch( action.type ) {
    case CREATE_STATUS:
      duped.createStatus = true;
      return duped;
    case CREATED_STATUS:
      duped.createStatus = false;
      return duped;
    case FETCH_PROFILE:
    case FETCH_FEED:
      duped.fetchFeed = true;
      return duped;
    case RECEIVE_FEED:
      duped.fetchFeed = false;
      return duped;
    case FETCH_PROFILE_FRIENDS:
      duped.friends = true;
      return duped;
    case RECEIVE_PROFILE_FRIENDS:
      duped.friends = false;
      return duped;
    case CREATE_ALBUM:
      duped.albums.creating = true;
      return duped;
    case RECEIVE_ALBUM:
      duped.albums.creating = false;
      duped.albums.fetchingOne = false;
      return duped;
    case FETCH_ALBUM:
      duped.albums.fetchingOne = true;
      return duped;
    case FETCH_MY_ALBUMS:
    case FETCH_ALBUMS:
      duped.albums.fetchingMany = true;
      return duped;
    case RECEIVE_ALBUMS:
    duped.albums.fetchingMany = false;
    return duped;
    default:
      return state;
  }
}

export default LoadingReducer;
