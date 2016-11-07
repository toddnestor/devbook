import React from 'react';
import { Link } from 'react-router';
import Comments from '../../cards/comments';
import ProfileCard from '../../cards/profile_card';

const Friendship = ({ activity }) => {
  const renderComments = () => (
    <Comments comments={activity.comments} />
  );

  let firstUser, secondUser;

  if( activity.user.friend_status == 'accepted' && activity.wall_user.friend_status != 'self' ) {
    firstUser = activity.user;
    secondUser = activity.wall_user;
  } else {
    firstUser = activity.wall_user;
    secondUser = activity.user;
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
      {activity.comments && activity.comments.length > 0 ? renderComments() : ""}
    </div>
  );
}

export default Friendship;
