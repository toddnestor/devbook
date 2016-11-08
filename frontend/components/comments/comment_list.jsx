import React from 'react';
import CommentItem from '../items/comment_item';

const CommentList = ({ comments, comment_count }) => (
  <ul className="media-list m-b">
    <li className="media text-center" style={{display: comments.length < comment_count ? 'list-item' : 'none', cursor: 'pointer'}}>
      <span className="icon icon-dots-three-horizontal"></span>
    </li>
    {
      comments.map( comment => <CommentItem comment={comment} key={comment.id} />)
    }
  </ul>
);

export default CommentList;
