export const fetchUsers = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/users',
    success,
    error
  });
};

export const searchUsers = (search, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: {search},
    success,
    error
  });
};
