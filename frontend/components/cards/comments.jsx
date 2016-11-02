import React from 'react';
import CommentItem from '../items/comment_item';

const Comments = ({ comments }) => (
  <ul className="media-list m-b">
    {
      comments.map( comment => <CommentItem comment={comment} key={comment.id} />)
    }
  </ul>
);

export default Comments;
