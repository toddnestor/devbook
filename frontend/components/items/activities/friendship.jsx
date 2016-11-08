import React from 'react';
import { Link } from 'react-router';
import Comments from '../../comments/comments_container';
import ProfileCard from '../../cards/profile_card';

const Friendship = ({ activity }) => {
  let firstUser, secondUser;

  if( activity.user.friend_status === 'none' || activity.wall_user.friend_status === 'self' ) {
    firstUser = activity.wall_user;
    secondUser = activity.user;
  } else {
    firstUser = activity.user;
    secondUser = activity.wall_user;
  }

  return (
    <div className="media-body">
      <div className="media-heading clearfix">
        <small className="pull-right text-muted">{moment(activity.created_at).fromNow()}</small>
        <Link className="user-link pull-left" to={`/${firstUser.username}`}>
          <h5>{firstUser.fname} {firstUser.lname}</h5>
        </Link>
        <span className="pull-left" style={{lineHeight: '38px', marginLeft: '5px', marginRight: '5px'}}>became friends with</span>
        <Link className="user-link pull-left" to={`/${secondUser.username}`}>
          <h5>{secondUser.fname} {secondUser.lname}</h5>
        </Link>
      </div>
      <div style={{maxWidth: '50%'}}>
        <ProfileCard user={secondUser} />
      </div>
      <Comments activity={activity} />
    </div>
  );
}

export default Friendship;
