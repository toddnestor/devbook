export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const fetchPhotos = id => ({
  type: FETCH_PHOTOS,
  id
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});
