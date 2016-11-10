import React from 'react';
import { Link } from 'react-router';
import FriendButton from '../friend_button/friend_button_container';

const FriendItem = ({ friend, Element = `li`, noUsername = false, style = {} }) => (
  <Element className="media m-b friend-item">
    <Link to={`/${friend.username}`} className="media-left">

      <span className="media-object bg-avatar" style={{backgroundImage: `url(${friend.avatar_url})`}}>
      </span>
    </Link>
    <div className="media-body">
      <Link to={`/${friend.username}`} className="friend-name">
        <strong>{friend.fname} {friend.lname}</strong>{noUsername ? '' : ` @${friend.username}`}
      </Link>
      <div className="media-body-actions">
        <FriendButton user={friend} style={style} />
      </div>
    </div>
  </Element>
);

export default FriendItem;
