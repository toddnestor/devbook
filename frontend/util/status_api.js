export const createStatus = (wallId, status, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/users/${wallId}/statuses`,
    data: {status},
    success,
    error
  });
};

export const updateStatus = (status, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/statuses/${status.id}`,
    data: {status},
    success,
    error
  });
};

export const deleteStatus = (status, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/statuses/${status.id}`,
    success,
    error
  });
};
