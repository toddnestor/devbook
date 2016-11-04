import { REQUEST_FRIEND,
         CANCEL_REQUEST,
         BLOCK_USER,
         UNBLOCK_USER,
         UNFRIEND_USER,
         ACCEPT_FRIEND_REQUEST,
         DENY_FRIEND_REQUEST,
         updateFriendshipStatus } from '../actions/friend_actions';

import { requestFriend,
         cancelFriendRequest,
         blockUser,
         unblockUser,
         unfriendUser,
         acceptFriendRequest,
         denyFriendRequest } from '../util/friend_api';

export default ({ getState, dispatch }) => next => action => {
  const success = status => () => dispatch(updateFriendshipStatus(action.user, status) );
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case REQUEST_FRIEND:
      requestFriend(action.user, success('requested'), error );
      break;
    case CANCEL_REQUEST:
      cancelFriendRequest(action.user, success('none'), error );
      break;
    case BLOCK_USER:
      blockUser(action.user, success('blocked'), error );
      break;
    case UNBLOCK_USER:
      unblockUser(action.user, success('none'), error );
      break;
    case UNFRIEND_USER:
      unfriendUser(action.user, success('none'), error );
      break;
    case ACCEPT_FRIEND_REQUEST:
      acceptFriendRequest(action.user, success('accepted'), error );
      break;
    case DENY_FRIEND_REQUEST:
      denyFriendRequest(action.user, success('none'), error );
      break;
  }

  return next(action);
};
