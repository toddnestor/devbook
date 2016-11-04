import React from 'react';
import { Link } from 'react-router';
import ProfileMenuContainer from './home/profile_menu_container';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
    <div className="container">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand logo">
          devbook
        </Link>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav hidden-xs">
          <li className={location.pathname == '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname == '/users' ? 'active' : ''}>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <ProfileMenuContainer />

        <form className="navbar-form navbar-right app-search" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
      </div>
    </div>
  </nav>
);

export default Nav;
