import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import UsersReducer from './users_reducer';
import ZoomPhotoReducer from './zoom_photo_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  users: UsersReducer,
  zoomPhoto: ZoomPhotoReducer
});

export default RootReducer;
