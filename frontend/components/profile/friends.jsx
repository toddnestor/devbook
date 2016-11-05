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
          friends.map( (friend, i) => (
            <div className="col-md-3">
              <ProfileCard key={i} user={friend} />
            </div>
        ))
        }
      </div>
    );
  }
}

export default Friends;
