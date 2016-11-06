import React from 'react';
import Autop from '../../utilities/autop';
import { Link } from 'react-router';
import ActivityPhotos from './activity_photos';
import Comments from '../../cards/comments';

const UserUpdate = ({ activity }) => {
  const renderComments = () => (
    <Comments comments={activity.comments} />
  );

  const renderPhotos = () => {
    return <ActivityPhotos media_items={activity.media_items} />
  }

  const genderPronoun = () => {
    switch( activity.user.gender ) {
      case 'male':
        return 'his';
      case 'female':
        return 'her';
      default:
        return 'their';
    }
  }

  const updatedText = () => {
    switch( activity.action ) {
      case 'relationship_status':
        return `${genderPronoun()} relationship status to ${activity.user.relationship_status}`;
      case 'avatar_url':
        return `${genderPronoun()} profile image`
      case 'cover_image_url':
        return `${genderPronoun()} cover image`
    }
  }

  return (
    <div className="media-body">
      <div className="media-heading">
        <small className="pull-right text-muted">{moment(activity.created_at).fromNow()}</small>
        <Link className="user-link" to={`/${activity.user.username}`}>
          <h5>{activity.user.fname} {activity.user.lname}</h5>
        </Link>
        {`Updated ${updatedText()}.`}
      </div>
      {activity.media_items && activity.media_items.length > 0 ? renderPhotos() : ""}
      {activity.comments && activity.comments.length > 0 ? renderComments() : ""}
    </div>
  );
}

export default UserUpdate;
