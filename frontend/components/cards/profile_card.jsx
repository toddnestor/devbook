import React from 'react';

const ProfileCard = ({ user }) => (
  <div className="panel panel-default panel-profile m-b-md">
        <div className="panel-heading" style={{backgroundImage: `url(${user.cover_image_url})`}}></div>
        <div className="panel-body text-center">
          <a href="profile/index.html">
            <img className="panel-profile-img" src={user.avatar_url} />
          </a>

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

            <li className="panel-menu-item">
              <a href="#userModal" className="text-inherit" data-toggle="modal">
                Enemies
                <h5 className="m-y-0">1</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
);

export default ProfileCard;
