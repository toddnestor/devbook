export const OPEN_ZOOM_PHOTO = 'OPEN_ZOOM_PHOTO';
export const CLOSE_ZOOM_PHOTO = 'CLOSE_ZOOM_PHOTO';

export const openZoomPhoto = imageSrc => ({
  type: OPEN_ZOOM_PHOTO,
  imageSrc
});

export const closeZoomPhoto = () => ({
  type: CLOSE_ZOOM_PHOTO
});
