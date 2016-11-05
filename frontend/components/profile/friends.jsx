import React from 'react';
import FriendItem from '../items/friend_item';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProfileFriends(this.props.params.username);
  }

  render() {
    let { profile } = this.props;

    let friends = profile.friends || [];

    return (
      <div className="container p-t-md profile-friends">
        <ul className="media-list media-list-stream">
          {
            friends.map( (friend, i) => <FriendItem key={i} friend={friend} /> )
          }
        </ul>
      </div>
    );
  }
}

export default Friends;
