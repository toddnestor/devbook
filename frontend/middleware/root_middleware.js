import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import UsersMiddleware from './users_middleware';
import FriendMiddleware from './friend_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware,
  UsersMiddleware,
  FriendMiddleware
);

export default RootMiddleware;
