import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = ({ profile, router }) => {

  const getActiveTab = () => {
    let currentPath = router.getCurrentLocation().pathname;

    if( currentPath.match(/^\/.*\/photos$/i) ) {
      return 'photos';
    } else if( currentPath.match(/^\/.*\/friends$/i)) {
      return 'friends';
    } else {
      return 'posts';
    }
  };

  return (
    <div className="profile-header text-center" style={{backgroundImage: `url(${profile && profile.cover_image_url ? profile.cover_image_url : 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/002/large/Programmer.jpg?1478195335'})`}}>
      <div className="gradient-overlay"></div>
      <div className="container">
        <div className="container-inner">
          <img className="img-circle media-object" src={ profile && profile.avatar_url ? profile.avatar_url : 'http://devbook.objects.cdn.dream.io/images/default_avatar.png' } />
          <h3 className="profile-header-user">{profile.fname} {profile.lname}</h3>
          <p className="profile-header-bio">
            {profile.tagline}
          </p>
        </div>
      </div>

      <nav className="profile-header-nav">
        <ul className="nav nav-tabs">
          <li className={getActiveTab() == 'posts' ? 'active' : ''}>
            <Link to={`/${profile.username}`}>
              Posts
            </Link>
          </li>
          <li className={getActiveTab() == 'photos' ? 'active' : ''}>
            <Link to={`/${profile.username}/photos`}>
              Photos
            </Link>
          </li>
          <li className={getActiveTab() == 'friends' ? 'active' : ''}>
            <Link to={`/${profile.username}/friends`}>
              Friends
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default withRouter( ProfileHeader );
