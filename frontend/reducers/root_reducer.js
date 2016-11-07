import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import UsersReducer from './users_reducer';
import ZoomPhotoReducer from './zoom_photo_reducer';
import LoadingReducer from './loading_reducer';
import OverlayReducer from './overlay_reducer';
import FeedReducer from './feed_reducer';
import NotificationsReducer from './notifications_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  users: UsersReducer,
  zoomPhoto: ZoomPhotoReducer,
  loading: LoadingReducer,
  overlay: OverlayReducer,
  feed: FeedReducer,
  notifications: NotificationsReducer
});

export default RootReducer;
