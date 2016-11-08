export const fetchFeed = (wallId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${wallId}/activities`,
    success,
    error
  });
};

export const fetchMoreFeed = (wallId, page, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${wallId}/activities`,
    data: {page},
    success,
    error
  });
};
