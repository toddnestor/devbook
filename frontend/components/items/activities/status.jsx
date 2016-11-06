import React from 'react';
import Autop from '../../utilities/autop';
import { Link } from 'react-router';
import ActivityPhotos from './activity_photos';
import Comments from '../../cards/comments';

const Status = ({ activity }) => {
  const renderComments = () => (
    <Comments comments={activity.comments} />
  );

  const renderPhotos = () => {
    return <ActivityPhotos media_items={activity.media_items} />
  }

  const renderToWall = () => (
    <span>
      <span className="icon icon-chevron-right pull-left"></span>
      <Link className="user-link pull-left" to={`/${activity.wall_user.username}`}>
        <h5>{activity.wall_user.fname} {activity.wall_user.lname}</h5>
      </Link>
    </span>
  );

  return (
    <div className="media-body">
      <div className="media-heading clearfix">
        <small className="pull-right text-muted">{moment(activity.created_at).fromNow()}</small>
        <Link className="user-link pull-left" to={`/${activity.user.username}`}>
          <h5>{activity.user.fname} {activity.user.lname}</h5>
        </Link>
        {activity.user_id !== activity.wall_id ? renderToWall() : ''}
      </div>
      <Autop>
        {activity.feedable.content}
      </Autop>
      {activity.media_items && activity.media_items.length > 0 ? renderPhotos() : ""}
      {activity.comments && activity.comments.length > 0 ? renderComments() : ""}
    </div>
  );
}

export default Status;
