import React from 'react';
import CommentList from './comment_list';
import CommentForm from './comment_form';

const Comments = ({activity: {comments, comment_count}, currentUser, createComment}) => {
  const renderComments = () => (
    <CommentList comments={comments} comment_count={comment_count} currentUser={currentUser} />
  );

  return (
    <div className="comment-section">
      {comments && comments.length > 0 ? renderComments() : ""}
      <CommentForm createComment={createComment} user={currentUser} />
    </div>
  );
};

export default Comments;
