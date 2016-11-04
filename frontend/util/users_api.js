export const fetchUsers = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/users',
    success,
    error
  });
};
