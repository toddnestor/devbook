import React from 'react';

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileMenu: false
    };
  }

  toggleProfileMenu(e) {
    e.preventDefault();
    let profileMenuState = !this.state.showProfileMenu;
    this.setState({showProfileMenu: profileMenuState});
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('we happened');
    this.props.logout();
  }

  render() {
    let { showProfileMenu } = this.state;

    return (
      <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
        <li>
          <button className="btn btn-default navbar-btn navbar-btn-avitar" onClick={this.toggleProfileMenu.bind(this)} title="">
            <img className="img-circle" src="https://en.gravatar.com/userimage/60529344/2daf3294c4731a1d4e540600dbb20d41.jpeg" />
          </button>
          <div className="popover fade bottom in" role="tooltip" style={{top: '42.2px', left: '-169px', display: showProfileMenu ? 'block' : 'none'}}>
            <div className="arrow" style={{left: '91.6256%'}}></div>
            <div className="popover-content p-x-0">
              <div className="nav nav-stacked" style={{width: '200px'}}>
                <li><a href="#">View Profile</a></li>
                <li><a href="#">Edit Profile</a></li>
                <li><a href="#" onClick={this.handleLogout.bind(this)}>Log Out</a></li>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default ProfileMenu;
