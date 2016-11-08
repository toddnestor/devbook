import React from 'react';
import CommentItem from '../items/comment_item';

const CommentList = ({ comments, comment_count, currentUser }) => {
  const isOwner = comment => comment.user.id === currentUser.id;

  return (
    <ul className="media-list m-b">
      <li className="media text-center" style={{display: false && comments.length < comment_count ? 'list-item' : 'none', cursor: 'pointer'}}>
        <span className="icon icon-dots-three-horizontal"></span>
      </li>
      {
        comments.map( comment => <CommentItem comment={comment} key={comment.id} isOwner={isOwner(comment)} />)
      }
    </ul>
  );
}

export default CommentList;
