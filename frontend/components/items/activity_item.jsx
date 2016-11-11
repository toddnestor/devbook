import React from 'react';
import Status from './activities/status';
import UserUpdate from './activities/user_update';
import Friendship from './activities/friendship';
import StatusActionsContainer from './activities/status_actions_container';
import Album from './activities/album';
import { Link } from 'react-router';

const ActivityItem = ({ activity, currentUser }) => {
  const renderItem = () => {
    switch( activity.feedable_type ) {
      case 'Status':
        return <Status activity={activity} />
      case 'User':
        return <UserUpdate activity={activity} />
      case 'Friendship':
        return <Friendship activity={activity} />
      case 'Album':
        return <Album activity={activity} />
      default:
        return <span style={{display: 'none'}}></span>
    }
  }

  let user = activity.user;

  //ugly, but we have to make sure to use the correct user for friendships
  if( activity.feedable_type == 'Friendship') {
    if( activity.user.friend_status !== 'accepted' && activity.user.friend_status !== 'self' ) {
      user = activity.wall_user;
    }
  }

  const isOwner = () => activity.user_id === currentUser.id;

  return (
    <li className="media list-group-item p-a activity-item">
      {isOwner() && activity.feedable_type == 'Status' ? <StatusActionsContainer activity={activity} /> : ""}
      <Link className="media-left" to={`/${user.username}`}>
        <img className="media-object img-rounded" src={user.avatar_url} />
      </Link>
      {renderItem()}
    </li>
  );
}

export default ActivityItem;
