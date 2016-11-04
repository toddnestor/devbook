import React from 'react';
import { Link } from 'react-router';

const ProfileCard = ({ user }) => (
  <div className="panel panel-default panel-profile m-b-md">
    <div className="panel-heading" style={{backgroundImage: `url(${user && user.cover_image_url ? user.cover_image_url : 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/002/large/Programmer.jpg?1478195335'})`}}></div>
    <div className="panel-body text-center">
      <Link to={`/${user.username}`}>
        <img className="panel-profile-img" src={user.avatar_url} />
      </Link>

      <h5 className="panel-title">
        <a className="text-inherit" href="#">{user.fname} {user.lname}</a>
      </h5>

      <p className="m-b-md">{user.tagline}</p>

      <ul className="panel-menu">
        <li className="panel-menu-item">
          <a href="#userModal" className="text-inherit" data-toggle="modal">
            Friends
            <h5 className="m-y-0">12M</h5>
          </a>
        </li>
      </ul>
      <button className="btn btn-primary-outline btn-sm">
        <span className={user.friend_status != 'none' ? 'icon icon-check' : 'icon icon-add-user'}></span>
        {user.friend_status != 'none' ? ' Friends' : ' Friend'}
      </button>
    </div>
  </div>
);

export default ProfileCard;
