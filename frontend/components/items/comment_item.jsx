import React from 'react';
import { Link } from 'react-router';
import Autop from '../utilities/autop';
import PhotoItem from './photo_item_container';
import CommentActionsContainer from '../comments/comment_actions_container';

const CommentItem = ({ comment, isOwner }) => {
  const renderPhoto = () => <PhotoItem photo={{url: comment.media_items[0].urls.large}} />;

  return (
    <li className="media comment-item">
      {isOwner ? <CommentActionsContainer comment={comment} /> : ""}
      <Link className="media-left" to={`/${comment.user.username}`}>
        <img className="media-object img-rounded" src={comment.user.avatar_url} />
      </Link>
      <div className="media-body">
        <small className="pull-right text-muted">{moment(comment.created_at).fromNow()}</small>
        <Link className="user-link" to={`/${comment.user.username}`}>
          <strong>{comment.user.fname} {comment.user.lname}: </strong>
        </Link>
        <Autop>
          {comment.text}
        </Autop>
        {comment.media_items && comment.media_items.length ? renderPhoto() : ''}
      </div>
    </li>
  );
}

export default CommentItem;
