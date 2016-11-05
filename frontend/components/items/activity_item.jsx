import React from 'react';
import PhotoItem from './photo_item_container';
import Comments from '../cards/comments';
import { Link } from 'react-router';

const ActivityItem = ({ activity }) => {
  const renderPhotos = () => (
    <div className="media-body-inline-grid photos">
      {
        activity.photos.map( photo => <PhotoItem key={photo.id} photo={photo} />)
      }
    </div>
  );

  const renderComments = () => (
    <Comments comments={activity.comments} />
  );

  return (
    <li className="media list-group-item p-a activity-item">
      <Link className="media-left" to={`/${activity.user.username}`}>
        <img className="media-object img-circle" src={activity.user.avatar_url} />
      </Link>
      <div className="media-body">
        <div className="media-heading">
          <small className="pull-right text-muted">{activity.time_ago} ago</small>
          <Link className="user-link" to={`/${activity.user.username}`}>
            <h5>{activity.user.fname} {activity.user.lname}</h5>
          </Link>
        </div>
        <p>
          {activity.text}
        </p>
        {activity.photos && activity.photos.length > 0 ? renderPhotos() : ""}
        {activity.comments && activity.comments.length > 0 ? renderComments() : ""}
      </div>
    </li>
  );
}

export default ActivityItem;
