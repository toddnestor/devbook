import React from 'react';

const FriendItem = ({ friend }) => (
  <li className="media m-b">
    <a className="media-left" href="#">
      <img className="media-object img-circle" src={friend.avatar_url} />
    </a>
    <div className="media-body">
      <strong>{friend.fname} {friend.lname}</strong> @{friend.username}
      <div className="media-body-actions">
        <button className="btn btn-primary-outline btn-sm">
          <span className={friend.are_friends ? 'icon icon-check' : 'icon icon-add-user'}></span> {friend.are_friends ? 'Friends' : 'Friend'}</button>
      </div>
    </div>
  </li>
);

export default FriendItem;