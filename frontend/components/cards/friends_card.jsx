import React from 'react';
import FriendItem from '../items/friend_item';

const FriendsCard = ({ friends }) => (
  <div className="panel panel-default m-b-md hidden-xs">
        <div className="panel-body">
        <h5 className="m-t-0">Friends <small>· <a href="#">View All</a></small></h5>
        <ul className="media-list media-list-stream">
          {
            friends.map( friend => <FriendItem friend={friend} /> )
          }
        </ul>
        </div>
        <div className="panel-footer">
          Add friends to create a bigger network.
        </div>
      </div>
);

export default FriendsCard;
