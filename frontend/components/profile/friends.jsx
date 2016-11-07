import React from 'react';
import FriendItem from '../items/friend_item';
import ProfileCard from '../cards/profile_card';
import FriendButtonContainer from '../friend_button/friend_button_container';
import { Link } from 'react-router';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProfileFriends(this.props.params.username);
  }

  render() {
    let { profile, currentUser, loading, params } = this.props;

    if( loading ) {
      return (
        <div className="loading-parent">
          <div className="loader"></div>
        </div>
      );
    }

    let friends = profile.friends || [];

    const noFriendsText = () => {
      if( profile.id === currentUser.id ) {
        return (
          <div className="jumbotron">
            <h2 className="text-center">
              You don't have any friends yet &#9785;
            </h2>
            <Link to="/users" className="btn btn-primary btn-lg" style={{display: 'block', margin: 'auto'}}>
              Find friends
            </Link>
          </div>
        );
      } else {
        return (
          <div className="jumbotron">
            <h2 className="text-center">
              {profile.fname ? profile.fname : params.username} doesn't have any friends yet &#9785;
            </h2>
            <div className="text-center m-t-md">
              <FriendButtonContainer user={profile} />
            </div>
          </div>
        );
      }
    };

    return (
      <div className="container p-t-md profile-friends">
        {
          friends.map( friend => (
            <div className="col-md-3" key={friend.id}>
              <ProfileCard user={friend} />
            </div>
        ))
        }
        <div className="col-md-offset-3 col-md-6" style={{display: friends && friends.length ? 'none' : 'block'}}>
          <div className="jumbotron">
            {noFriendsText()}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
