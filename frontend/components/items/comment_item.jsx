import React from 'react';

const CommentItem = ({ comment }) => (
  <li className="media">
    <a className="media-left" href="#">
      <img className="media-object img-circle" src={comment.user.avatar_url} />
    </a>
    <div className="media-body">
      <strong>{comment.user.fname} {comment.user.lname}: </strong>
      {comment.text}
    </div>
  </li>
);

export default CommentItem;
