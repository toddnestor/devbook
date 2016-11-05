export const requestFriend = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/request_friendship`,
    success,
    error
  });
};

export const cancelFriendRequest = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/cancel_request`,
    success,
    error
  });
};

export const blockUser = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/block`,
    success,
    error
  });
};

export const unblockUser = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/unblock`,
    success,
    error
  });
};

export const unfriendUser = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/unfriend`,
    success,
    error
  });
};

export const acceptFriendRequest = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/accept`,
    success,
    error
  });
};

export const denyFriendRequest = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/deny`,
    success,
    error
  });
};
