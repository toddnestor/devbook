import React from 'react';
import { Link } from 'react-router';

const CommentItem = ({ comment }) => (
  <li className="media">
    <Link className="media-left" to={`/${comment.user.username}`}>
      <img className="media-object img-circle" src={comment.user.avatar_url} />
    </Link>
    <div className="media-body">
      <Link className="user-link" to={`/${comment.user.username}`}>
        <strong>{comment.user.fname} {comment.user.lname}: </strong>
      </Link>
      {comment.text}
    </div>
  </li>
);

export default CommentItem;
