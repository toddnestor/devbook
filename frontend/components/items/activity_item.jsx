import React from 'react';
import PhotoItem from './photo_item_container';
import Comments from '../cards/comments';
import Autop from '../utilities/autop';
import { Link } from 'react-router';

const ActivityItem = ({ activity }) => {
  const renderPhotos = () => {

    if( activity.media_items.length === 1 ) {
      let photo = activity.media_items[0];

      return (
        <div className="only-photo">
          <PhotoItem key={photo.id} photo={{url: photo.urls.large}} />
        </div>
      )
    }

    if( activity.media_items.length < 5 ) {
      return (
        <div className="media-body-inline-grid photos">
          {
            activity.media_items.map( (photo, i) => (
              <PhotoItem key={photo.id}
                         zoomUrl={photo.urls.large}
                         photo={{url: i % 2 == 0 ? photo.urls.wide : photo.urls.narrow}} />
            ))
          }
        </div>
      );
    }

    return (
      <div className="image-previews">
        {
          activity.media_items.map( photo => <PhotoItem key={photo.id} photo={{url: photo.urls.large}} />)
        }
      </div>
    );
  }

  const renderComments = () => (
    <Comments comments={activity.comments} />
  );

  const renderContent = () => (
    <Autop>
      {activity.feedable.content}
    </Autop>
  );

  return (
    <li className="media list-group-item p-a activity-item">
      <Link className="media-left" to={`/${activity.user.username}`}>
        <img className="media-object img-circle" src={activity.user.avatar_url} />
      </Link>
      <div className="media-body">
        <div className="media-heading">
          <small className="pull-right text-muted">{moment(activity.created_at).fromNow()}</small>
          <Link className="user-link" to={`/${activity.user.username}`}>
            <h5>{activity.user.fname} {activity.user.lname}</h5>
          </Link>
        </div>
        {activity.feedable_type == 'Status' ? renderContent() : ''}
        {activity.media_items && activity.media_items.length > 0 ? renderPhotos() : ""}
        {activity.comments && activity.comments.length > 0 ? renderComments() : ""}
      </div>
    </li>
  );
}

export default ActivityItem;
