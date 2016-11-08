export const createComment = (comment, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment},
    success,
    error
  });
};

export const updateComment = (comment, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: {comment},
    success,
    error
  });
};

export const deleteComment = (comment, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`,
    success,
    error
  });
};
