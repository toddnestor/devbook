import React from 'react';
import ProfileHeader from './profile_header';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProfile(this.props.params.username);
  }

  render() {
    let { profile, children } = this.props;

    return (
      <div className="profile-page">
        <ProfileHeader profile={profile} />
        { children }
      </div>
    );
  }
}

export default Profile;
