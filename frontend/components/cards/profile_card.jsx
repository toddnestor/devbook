import React from 'react';
import { Link } from 'react-router';
import FriendButton from '../friend_button/friend_button_container';

const ProfileCard = ({ user }) => (
  <div className="panel panel-default panel-profile m-b-md">
    <div className="panel-heading" style={{backgroundImage: `url(${user && user.cover_image_url ? user.cover_image_url : 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/002/large/Programmer.jpg?1478195335'})`}}></div>
    <div className="panel-body text-center">
      <Link to={`/${user.username}`}>
        <img className="panel-profile-img" src={user.avatar_url} />
      </Link>

      <h5 className="panel-title">
        <Link className="text-inherit" to={`/${user.username}`}>
          {user.fname} {user.lname}
        </Link>
      </h5>

      <p className="m-b-md">{user.tagline}</p>

      <ul className="panel-menu">
        <li className="panel-menu-item">
          <a className="text-inherit">
            Friends
            <h5 className="m-y-0">{user.friend_count}</h5>
          </a>
        </li>
      </ul>
      <FriendButton user={user} />
    </div>
  </div>
);

export default ProfileCard;
