import React from 'react';
import FriendItem from '../items/friend_item';

import { dummyFriends } from './dummy_content';

let friends = dummyFriends.concat(dummyFriends).concat(dummyFriends).concat(dummyFriends);

const Friends = ({ profile }) => (
  <div className="container p-t-md profile-friends">
    <ul className="media-list media-list-stream">
      {
        friends.map( (friend, i) => <FriendItem key={i} friend={friend} /> )
      }
    </ul>
  </div>
);

export default Friends;
