import React from 'react';
import { Link } from 'react-router';
import FriendButton from '../friend_button/friend_button_container';

const FriendItem = ({ friend }) => (
  <li className="media m-b friend-item">
    <Link to={`/${friend.username}`} className="media-left">
      <img className="media-object img-circle" src={friend.avatar_url} />
    </Link>
    <div className="media-body">
      <Link to={`/${friend.username}`} className="friend-name">
        <strong>{friend.fname} {friend.lname}</strong> @{friend.username}
      </Link>
      <div className="media-body-actions">
        <FriendButton user={friend} />
      </div>
    </div>
  </li>
);

export default FriendItem;
