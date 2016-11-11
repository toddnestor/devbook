import React from 'react';
import { Link } from 'react-router';
import ActivityPhotos from './activity_photos';
import Comments from '../../comments/comments_container';

const Album = ({ activity }) => {
  const renderPhotos = () => {
    return <ActivityPhotos media_items={activity.media_items} />
  }

  return (
    <div className="media-body">
      <div className="media-heading clearfix">
        <small className="pull-right text-muted">{moment(activity.created_at).fromNow()}</small>
        <Link className="user-link pull-left" to={`/${activity.user.username}`}>
          <h5>{activity.user.fname} {activity.user.lname}</h5>
        </Link>
      </div>
      <div>
        created a new album
        <Link to={`/${activity.user.username}/albums/${activity.feedable.id}`}>
          <strong> {activity.feedable.title}</strong>
        </Link>
      </div>
      {activity.media_items && activity.media_items.length > 0 ? renderPhotos() : ""}
      <Comments activity={activity} />
    </div>
  );
}

export default Album;
