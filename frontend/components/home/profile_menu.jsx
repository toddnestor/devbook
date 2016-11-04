import React from 'react';
import { Link } from 'react-router';

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileMenu: false
    };

    this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
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
    let { currentUser } = this.props;

    return (
      <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
        <li>
          <button className="btn btn-default navbar-btn navbar-btn-avitar" onClick={this.toggleProfileMenu} title="">
            <img className="img-circle" src={ currentUser && currentUser.avatar_url ? currentUser.avatar_url : 'http://devbook.objects.cdn.dream.io/images/default_avatar.png' } />
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
