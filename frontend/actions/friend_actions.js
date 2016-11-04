export const REQUEST_FRIEND = 'REQUEST_FRIEND';
export const CANCEL_REQUEST = 'CANCEL_REQUEST';
export const BLOCK_USER = 'BLOCK_USER';
export const UNBLOCK_USER = 'UNBLOCK_USER';
export const UNFRIEND_USER = 'UNFRIEND_USER';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const DENY_FRIEND_REQUEST = 'DENY_FRIEND_REQUEST';
export const UPDATE_FRIENDSHIP_STATUS = 'UPDATE_FRIENDSHIP_STATUS';

export const requestFriend = user => ({
  type: REQUEST_FRIEND,
  user
});

export const cancelRequest = user => ({
  type: CANCEL_REQUEST,
  user
});

export const blockUser = user => ({
  type: BLOCK_USER,
  user
});

export const unBlockUser = user => ({
  type: UNBLOCK_USER,
  user
});

export const unfriendUser = user => ({
  type: UNFRIEND_USER,
  user
});

export const acceptFriendRequest = user => ({
  type: ACCEPT_FRIEND_REQUEST,
  user
});

export const denyFriendRequest = user => ({
  type: DENY_FRIEND_REQUEST,
  user
});

export const updateFriendshipStatus = (user, status) => ({
  type: UPDATE_FRIENDSHIP_STATUS,
  user,
  status
});
