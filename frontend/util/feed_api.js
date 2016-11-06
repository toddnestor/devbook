export const fetchFeed = (wallId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${wallId}/activities`,
    success,
    error
  });
};
