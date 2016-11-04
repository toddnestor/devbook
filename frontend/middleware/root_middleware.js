import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware,
  UsersMiddleware
);

export default RootMiddleware;
