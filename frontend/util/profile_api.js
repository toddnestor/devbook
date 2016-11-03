export const fetchProfile = (username, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`,
    success,
    error
  });
};
