export const CREATE_ALBUM = 'CREATE_ALBUM';
export const UPDATE_ALBUM = 'UPDATE_ALBUM';
export const DESTROY_ALBUM = 'DESTROY_ALBUM';
export const FETCH_ALBUM = 'FETCH_ALBUM';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_MY_ALBUMS = 'FETCH_MY_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const createAlbum = album => ({
  type: CREATE_ALBUM,
  album
});

export const updateAlbum = album => ({
  type: UPDATE_ALBUM,
  album
});

export const destroyAlbum = album => ({
  type: DESTROY_ALBUM,
  album
});

export const fetchAlbum = id => ({
  type: FETCH_ALBUM,
  id
});

export const fetchAlbums = userId => ({
  type: FETCH_ALBUMS,
  userId
});

export const fetchMyAlbums = () => ({
  type: FETCH_MY_ALBUMS
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});
