import React from 'react';
import FriendItem from '../items/friend_item';
import ProfileCard from '../cards/profile_card';

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
        {
          friends.map( friend => (
            <div className="col-md-3" key={friend.id}>
              <ProfileCard user={friend} />
            </div>
        ))
        }
      </div>
    );
  }
}

export default Friends;
