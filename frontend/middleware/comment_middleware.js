import { CREATE_COMMENT,
         UPDATE_COMMENT,
         DELETE_COMMENT,
         receiveComment,
         receiveUpdatedComment,
         removeComment,
         FETCH_MORE_COMMENTS,
         receiveMoreComments } from '../actions/comment_actions';
import { createComment, updateComment, deleteComment, fetchMoreComments } from '../util/comment_api';

export default ({ getState, dispatch }) => next => action => {
  let success;

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case CREATE_COMMENT:
      success = comment => dispatch(receiveComment(comment));
      createComment(action.comment, success, error);
      break;
    case UPDATE_COMMENT:
      success = comment => dispatch(receiveUpdatedComment(comment));
      updateComment(action.comment, success, error);
      break;
    case DELETE_COMMENT:
      success = () => dispatch(removeComment(action.comment));
      deleteComment(action.comment, success, error);
      break;
    case FETCH_MORE_COMMENTS:
      success = comments => dispatch(receiveMoreComments(action.activity_id, comments));
      fetchMoreComments(action.commentable_type, action.commentable_id, action.page, success, error);
      break;
  }

  return next(action);
};
