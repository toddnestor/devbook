import { OPEN_ZOOM_PHOTO, CLOSE_ZOOM_PHOTO } from '../actions/zoom_photo_actions';

const _defaultState = {display: false, imageSrc: ''};

const ZoomPhotoReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case OPEN_ZOOM_PHOTO:
      return {display: true, imageSrc: action.imageSrc};
    case CLOSE_ZOOM_PHOTO:
      return _.merge({}, _defaultState);
    default:
      return state;
  }
}

export default ZoomPhotoReducer;
