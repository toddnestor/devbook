import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import UsersMiddleware from './users_middleware';
import FriendMiddleware from './friend_middleware';
import StatusMiddleware from './status_middleware';
import FeedMiddleware from './feed_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware,
  UsersMiddleware,
  FriendMiddleware,
  StatusMiddleware,
  FeedMiddleware
);

export default RootMiddleware;
