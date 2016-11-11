import { CREATE_ALBUM,
         UPDATE_ALBUM,
         DESTROY_ALBUM,
         FETCH_ALBUM,
         FETCH_ALBUMS,
         FETCH_MY_ALBUMS,
         receiveAlbum,
         receiveAlbums,
         removeAlbum } from '../actions/album_actions';
import { createAlbum,
         updateAlbum,
         destroyAlbum,
         fetchAlbum,
         fetchAlbums,
         fetchMyAlbums } from '../util/album_api';
import { browserHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  let success = albums => {
    dispatch( receiveAlbums( albums ) );
  };

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case CREATE_ALBUM:
      success = album => {
        browserHistory.push(`/albums/${album.id}`);
        dispatch( receiveAlbum( album ) );
      }

      createAlbum(action.album, success, error);
      break;
    case UPDATE_ALBUM:
      success = album => dispatch( receiveAlbum( album ) );
      updateAlbum(action.album, success, error);
      break;
    case DESTROY_ALBUM:
      success = () => dispatch( removeAlbum( action.album ) );
      updateAlbum(action.album, success, error);
      break;
    case FETCH_ALBUM:
      success = album => dispatch( receiveAlbum( album ) );
      fetchAlbum(action.id, success, error);
      break;
    case FETCH_ALBUMS:
      success = albums => dispatch( receiveAlbums( albums ) );
      fetchAlbums(action.userId, success, error);
      break;
    case FETCH_MY_ALBUMS:
      success = albums => dispatch( receiveAlbums( albums ) );
      fetchMyAlbums(success, error);
      break;
  }

  return next(action);
};
