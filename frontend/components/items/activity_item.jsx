import React from 'react';
import Status from './activities/status';
import UserUpdate from './activities/user_update';
import Friendship from './activities/friendship';
import { Link } from 'react-router';

const ActivityItem = ({ activity }) => {
  const renderItem = () => {
    switch( activity.feedable_type ) {
      case 'Status':
        return <Status activity={activity} />
      case 'User':
        return <UserUpdate activity={activity} />
      case 'Friendship':
        return <Friendship activity={activity} />
      default:
        return <span style={{display: 'none'}}></span>
    }
  }

  return (
    <li className="media list-group-item p-a activity-item">
      <Link className="media-left" to={`/${activity.user.username}`}>
        <img className="media-object img-circle" src={activity.user.avatar_url} />
      </Link>
      {renderItem()}
    </li>
  );
}

export default ActivityItem;
