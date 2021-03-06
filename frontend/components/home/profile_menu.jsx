import React from 'react';
import { Link } from 'react-router';
import FriendRequests from '../notifications/friend_requests';

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileMenu: false
    };

    this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
  }

  componentWillMount() {
    if( location.hostname === 'devbook.dev' ) {
      this.props.fetchNotifications();
    } else {
      this.interval = setInterval(() => {
        this.props.fetchNotifications();
      }, 5000);
    }
  }

  componentWillUnmount() {
    if( location.hostname !== 'devbook.dev' ) {
      clearInterval(this.interval);
    }
  }

  closeProfileMenu() {
    this.setState({showProfileMenu: false});
  }

  toggleProfileMenu(e) {
    e.preventDefault();
    let profileMenuState = !this.state.showProfileMenu;
    this.setState({showProfileMenu: profileMenuState});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let { showProfileMenu } = this.state;
    let { currentUser, requestedFriends, acceptFriendRequest, denyFriendRequest } = this.props;

    return (
      <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs profile-menu">
        <li>
          <FriendRequests acceptFriendRequest={acceptFriendRequest} denyFriendRequest={denyFriendRequest} requestedFriends={requestedFriends} />
        </li>
        <li>
          <button className="btn btn-default navbar-btn navbar-btn-avitar" onClick={this.toggleProfileMenu} title="">
            <span className="bg-avatar" style={{backgroundImage: `url(${currentUser && currentUser.avatar_url ? currentUser.avatar_url : 'http://devbook.objects.cdn.dream.io/images/default_avatar.png'})`, width: '35px', height: '35px', display: 'block'}}>
            </span>
          </button>
          <div className="popover fade bottom in" role="tooltip" style={{top: '42.2px', left: '-169px', display: showProfileMenu ? 'block' : 'none'}}>
            <div className="arrow" style={{left: '91.6256%'}}></div>
            <div className="popover-content p-x-0">
              <div className="nav nav-stacked" style={{width: '200px'}}>
                <ul className="profile-menu-dropdown">
                  <li>
                    <Link onClick={this.closeProfileMenu} to={`/${currentUser ? currentUser.username : ''}`}>
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.closeProfileMenu} to={`/${currentUser ? currentUser.username : ''}/friends`}>
                      View Friends
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.closeProfileMenu} to={'/edit-profile'}>Edit Profile</Link>
                  </li>
                  <li><a href="#" onClick={this.handleLogout.bind(this)}>Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default ProfileMenu;
