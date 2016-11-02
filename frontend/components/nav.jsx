import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src="/assets/brand-white.png" alt="brand" />
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav hidden-xs">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="profile/index.html">Profile</a>
              </li>
              <li>
                <a data-toggle="modal" href="#msgModal">Messages</a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
              <li>
                <a className="app-notifications" href="notifications/index.html">
                  <span className="icon icon-bell"></span>
                </a>
              </li>
              <li>
                <button className="btn btn-default navbar-btn navbar-btn-avitar" title="">
                  <img className="img-circle" src="https://en.gravatar.com/userimage/60529344/2daf3294c4731a1d4e540600dbb20d41.jpeg" />
                </button>
              </li>
            </ul>

            <form className="navbar-form navbar-right app-search" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>

            <ul className="nav navbar-nav">
              <li><a href="#">Growl</a></li>
              <li><a href="login/index.html">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
