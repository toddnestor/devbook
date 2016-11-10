import React from 'react';
import { Link } from 'react-router';
import ProfileMenuContainer from './home/profile_menu_container';
import SearchUsersContainer from './users/search_users_container';

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

        <SearchUsersContainer />
      </div>
    </div>
  </nav>
);

export default Nav;
