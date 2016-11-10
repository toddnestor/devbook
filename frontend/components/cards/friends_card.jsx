import React from 'react';
import FriendItem from '../items/friend_item';
import { Link } from 'react-router';

const FriendsCard = ({ friends, user }) => (
  <div className="panel panel-default m-b-md hidden-xs">
        <div className="panel-body">
        <h5 className="m-t-0">Friends <small>· <Link to={`/${user.username}/friends`}>View All</Link></small></h5>
        <ul className="media-list media-list-stream">
          {
            friends.slice(0,2).map( (friend, i) => <FriendItem key={friend.id} friend={friend} style={{zIndex: 2 - i}} avatarHeight='60px' /> )
          }
        </ul>
        </div>
        <div className="panel-footer">
          Add friends to create a bigger network.
        </div>
      </div>
);

export default FriendsCard;
