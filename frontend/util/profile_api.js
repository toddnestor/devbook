export const fetchProfile = (username, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`,
    success,
    error
  });
};

export const fetchProfileFriends = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}/friends`,
    success,
    error
  });
};
