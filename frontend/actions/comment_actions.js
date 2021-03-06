export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_UPDATED_COMMENT = 'RECEIVE_UPDATED_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const FETCH_MORE_COMMENTS = 'FETCH_MORE_COMMENTS';
export const RECEIVE_MORE_COMMENTS = 'RECEIVE_MORE_COMMENTS';

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveUpdatedComment = comment => ({
  type: RECEIVE_UPDATED_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchMoreComments = (commentable_type, commentable_id, page, activity_id) => ({
  type: FETCH_MORE_COMMENTS,
  commentable_type,
  commentable_id,
  page,
  activity_id
});

export const receiveMoreComments = (id, comments) => ({
  type: RECEIVE_MORE_COMMENTS,
  id,
  comments
});
